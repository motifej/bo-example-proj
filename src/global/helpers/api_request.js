/*flow-disable*/

import axios from "axios";
import API_SERVER_URL from "../constants.js";

export const apiRequest = (method, query, data) => {
    return axios({
        method,
        url: `${API_SERVER_URL}${query}`,
        data
    })
        .then(response => {
            return response;
        })
        .catch(err => {
            return err;
        });
};

export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const UPDATE = "UPDATE";
