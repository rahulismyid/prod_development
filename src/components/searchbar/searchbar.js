import { URL, HEADERS } from "../../config";
import React, { Component } from "react";
// import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import { custom_request } from "../../services/searchbar-service";
import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const url = `${URL}topic?type=product&category=installtech`;

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: props.showbar,
            responseData: null,
            formattedData: null,
            inputValue: ''
        };
    }

    componentDidMount() { }

    handleInputChange = (newValue) => {
        console.log(newValue);
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    };

    getModelsAPI = (input) => {

        if (!input) {
            return Promise.resolve({ options: [] });
        }


        return axios(url, {
            cancelToken: source.token,
            // credentials: 'include',
            params: { key: input },
            headers: {
                "custkey": "B42F6F93-238D-453B-AB0D-CB84A80516A1",
                "Content-Type": "application/json"
            },
            method: 'GET'
        })
            .then((json) => {
                // console.log(json);
                // return;
                const formatted = json.data.map((l, i) => {
                    return Object.assign({}, {
                        value: l,
                        label: l
                    });
                });
                return { options: formatted }
            }).catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('Request canceled', thrown.message);
                } else {
                    // handle error
                }
            });
    }

    render() {
        return (
            <AsyncSelect
                isMulti
                cacheOptions
                defaultOptions
                // loadOptions={this.getModelsAPI}
                onInputChange={this.getModelsAPI}
                options={this.getModelsAPI}
            />
        );
    }
}

export default SearchBar;