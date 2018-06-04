const onRowClick = (id) => {
    console.log('id',id)
};

const config = {
    domain: "http://almond:8081",
    endPoint: "/accounts",
    onRowClick: onRowClick,
    resultsHeader: [
        {
            value: "id",
            name: "Id"
        },
        {
            value: "first_name",
            name: "First Name"
        },
        {
            value: "last_name",
            name: "Last Name"
        },
        {
            value: "time_stamp",
            name: "Registration Time"
        },
        {
            value: "status",
            name: "Status"
        },
        {
            value: "a_purchased_tokens",
            name: "Purchased Tokens"
        },
        {
            value: "a_bonus_tokens",
            name: "Bonus Tokens"
        },
        {
            value: "a_normalized_amount_eth",
            name: "Cont. Amount(ETH)"
        },
        {
            value: "a_normalized_amount_usd",
            name: "Cont. Amount(USD)"
        },
        {
            value: "email",
            name: "Email"
        },
        {
            value: "country_iso",
            name: "Country"
        },
        {
            value: "tracking_id",
            name: "Referred By"
        },
        {
            value: "marketer",
            name: "Marketer"
        },
        {
            value: "kyc_status",
            name: "KYC status"
        }
    ]
};

export default config