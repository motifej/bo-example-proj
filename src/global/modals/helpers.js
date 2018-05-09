import { apiRequest, GET, POST, PUT, UPDATE } from "../helpers/api_request";
import {
    buildBodyData,
    filterObjByName,
    filterEmptyInputs,
    removeObjFromList
} from "../helpers/input_services";

export const getMethod = elementId => {
    switch (elementId) {
        case "changeStatus":
            return PUT;
        case "generateCampaign":
            return POST;
        case "cryptoDeposit":
            return POST;
        case "wireDeposit":
            return POST;
        case "updateKyc":
            return PUT;
        case "returnFunds":
            return PUT;
        case "changeTransactionStatus":
            return PUT;
        case "updateWalletAddress":
            return PUT;
        case "addNote":
            return POST;
        case "changeFirstName":
            return PUT;
        case "changeLastName":
            return PUT;
        case "changeEmail":
            return PUT;
        case "changeKycStatus":
            return PUT;
    }
};
export const buildQuery = (elementId, userId, transactionId) => {
    let query = "";
    switch (elementId) {
        case "changeStatus":
            return (query = `accounts/${userId}`);
        case "generateCampaign":
            return (query = `accounts/${userId}/campaigns`);
        case "cryptoDeposit":
            return (query = `transactions`);
        case "wireDeposit":
            return (query = `transactions`);
        case "updateKyc":
            return (query = `accounts/${userId}`);
        case "returnFunds":
            return (query = `transactions/${transactionId}`);
        case "changeTransactionStatus":
            return (query = `transactions/${transactionId}`);
        case "updateWalletAddress":
            return (query = `accounts/${userId}/wallet`);
        case "addNote":
            return (query = `accounts/${userId}/notes`);
        case "changeFirstName":
            return (query = `accounts/${userId}`);
        case "changeLastName":
            return (query = `accounts/${userId}`);
        case "changeEmail":
            return (query = `accounts/${userId}`);
        case "changeKycStatus":
            return (query = `accounts/${userId}`);
        default:
            return;
    }
};
export const buildDataObject = (
    elementId,
    elements,
    id,
    acceptedAmount,
    currency
) => {
    let data = {};
    switch (elementId) {
        case "changeStatus":
            return (data = {
                status: parseInt(elements[0].value)
            });
        case "generateCampaign":
            return (data = {
                name: elements[0].value
            });
        case "cryptoDeposit":
            const lista = buildBodyData(
                filterObjByName(elements, [
                    "amount",
                    "currency",
                    "blockchain_hash",
                    "from_address"
                ])
            );
            return (data = {
                account_id: id,
                amount: parseFloat(lista.amount),
                currency: lista.currency,
                payment_type: "CRYPTO",
                blockchain_hash: lista.blockchain_hash,
                from_address: lista.from_address
            });
        case "wireDeposit":
            const list = buildBodyData(
                filterObjByName(elements, ["amount", "currency"])
            );
            const wire = buildBodyData(
                removeObjFromList(filterEmptyInputs(elements), [
                    "amount",
                    "currency"
                ])
            );
            return (data = {
                account_id: id,
                amount: parseFloat(list.amount),
                currency: list.currency,
                payment_type: "WIRE",
                wire: wire
            });
        case "updateKyc":
            return (data = {
                kyc_link: elements[0].value
            });
        case "returnFunds":
            return ( data = {
                    status: 40,
                    accepted_amount: elements[0].value,
                    from_address: elements[2].value,
                    to_address: elements[3].value,
                    blockchain_hash: elements[4].value,
                    return_funds: { comment: elements[5].value }
            });
        case "changeTransactionStatus":
            return (data = { status: parseInt(elements[0].value) });
        case "updateWalletAddress":
            return (data = {
                etherium_wallet_address: elements[0].value
            });
        case "addNote":
            return (data = {
                content: elements[0].value
            });
        case "changeFirstName":
            return (data = {
                first_name: elements[0].value
            });
        case "changeLastName":
            return (data = {
                last_name: elements[0].value
            });
        case "changeEmail":
            return (data = {
                email: elements[0].value
            });
        case "changeKycStatus":
            return (data = {
                kyc_status: parseInt(elements[0].value)
            });
        default:
            return;
    }
};
