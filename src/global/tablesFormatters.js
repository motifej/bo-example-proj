import { T } from "./helpers/translate";
import ToolTip from "./components/tool_tip";
import { sliceString } from "./helpers/stringsFormatters";
import { CopyToClipboard } from "react-copy-to-clipboard";

import React from "react";
export const userTransactionsTableFormatter = (key, value) => {
    return key === "timestamp" || key === "accepted_timestamp"
        ? !value
            ? "-"
            : `${new Date(value).toDateString()} ${new Date(
                  value
              ).toLocaleTimeString()}`
        : key === "payment_type"
            ? value === 10 ? "Crypto" : "Wire"
            : key === "amount" || key === "accepted_amount"
                ? !value ? "-" : parseFloat(value)
                : T(`transaction.${key}.${value}`) || value || "-";
};

export const transactionsTableFormatter = (key, value) => {
    return key === "timestamp" || key === "accepted_timestamp"
        ? !value
            ? "-"
            : `${new Date(value).toDateString()} ${new Date(
                  value
              ).toLocaleTimeString()}`
        : key === "accepted_amount" ||
          key === "amount" ||
          key === "purchased_tokens" ||
          key === "bonus_tokens"
            ? !value ? "-" : parseFloat(value)
            : T(`transaction.${key}.${value}`) || value || "-";
};

export const usersTableFormatter = (key, value) => {
    return key === "time_stamp"
        ? `${new Date(value).toDateString()}`
        : key === "a_bonus_tokens" ||
          key === "a_purchased_tokens" ||
          key === "a_normalized_amount_eth" ||
          key === "a_normalized_amount_usd"
            ? !value ? "-" : parseFloat(value).toFixed(1)
            : T(`user.${key}.${value}`) || value || "-";
};

export const userListOfCampaignsFormatter = (key, value) => {
    return key === "time_stamp"
        ? `${new Date(value).toDateString()} ${new Date(
              value
          ).toLocaleTimeString()}`
        : T(`user.${key}.${value}`) || value;
};
export const tokensTableFormatter = (key, value, index) => {
    return key === "token_amount" ? (
        <ToolTip
            id={`${key}${value}${index}`}
            render={`${parseFloat(value).toFixed(2)}..` || "-"}
            renderOnHover={value}
            type="dark"
        />
    ) : key === "dest_wallet" ? (
        <div>
            <ToolTip
                id={`${key}${value}${index}`}
                render={sliceString(value)}
                renderOnHover={value}
                type="dark"
                wrapperStyle="di"
            />
            {value && (
                <CopyToClipboard text={value}>
                    <img
                        src="./img/copy-link.png"
                        className="w1 h1 di pointer"
                    />
                </CopyToClipboard>
            )}
        </div>
    ) : key === "blockchain_hash" ? (
        <div>
            <ToolTip
                id={`${key}${value}${index}`}
                render={sliceString(value)}
                renderOnHover={value}
                type="dark"
                wrapperStyle="di"
            />
            {value && (
                <CopyToClipboard text={value}>
                    <img
                        src="./img/copy-link.png"
                        className="w1 h1 di pointer"
                    />
                </CopyToClipboard>
            )}
        </div>
    ) : (
        T(`token.${key}.${value}`) || value
    );
};
