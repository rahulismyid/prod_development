import { URL, HEADERS } from "../config";
import 'babel-polyfill';
import axios from 'axios';


const CancelToken = axios.CancelToken;
const url = `${URL}topic?type=product&category=installtech`;
var cancel;

export function custom_request(options) {
    if (cancel != undefined) {
        cancel();
    }
    return axios.get(url,
        {
            params: { key: options },
            headers: { 'custkey': HEADERS.custkey },
            cancelToken: new CancelToken(function executor(c) {
                // An executor function receives a cancel function as a parameter
                cancel = c;
            }),
            timeout: 10000
        })
        .then((response) => {
            return response;
        })
        .catch((response) => {
            return null;
        });
};