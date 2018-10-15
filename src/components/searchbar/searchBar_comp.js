import React from 'react';
import { searchBarTabs } from "../../data/searchbar";
import { custom_request } from '../../services/searchbar-service';
import InstallTechSearchBar from './InstallTechSearchBar';
import IntentSearchBar from './IntentSearchBar';
import { INSTALLTECH, INTENT } from "../../placeholders";
import "./searchbar.scss";


export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.getOptions = this.getOptions.bind(this);
        this.state = {
            currentTab: null,
            currentLiState: null
        }
    }

    componentDidMount = () => {
        this.setState({ currentTab: INSTALLTECH })
    }

    getOptions = (input, callback) => {
        if (!input) {
            return;
            // return Promise.resolve({ options: [] });
        }
        let formatted;
        setTimeout(function () {
            custom_request(input).then(function (data) {
                if (data == null || data == undefined || data.length == 0) {
                    return;
                } else {
                    callback(formatted = data.data.map((l) => {
                        return Object.assign({}, {
                            value: l,
                            label: l
                        });
                    }));
                }
            });
        }, 500);
    };

    handleTabClick = (e) => {
        this.setState({ currentTab: e.target.getAttribute('data-key') });
        const currentLiState = this.state.active;
        this.setState({ active: (e.target.getAttribute('class') == 'active' ? '' : active ) });
    }

    toggleClass() {
        const currentLiState = this.state.active;
        this.setState({ active: !currentLiState });
    };

    render = () => {
        let tabs_data = searchBarTabs.map((item, i) =>
            <li className={item.name} key={i} onClick={this.handleTabClick} data-key={item.name}>{item.name}</li>
            // onClick={this.toggleClass.bind(this)}><span></span></a></div>
        );

        if (this.state.currentTab == INSTALLTECH) {
            return (
                <div className={"search-div-center"}>
                    <div className={"list-inline list"}>
                        {tabs_data}
                    </div>
                    <InstallTechSearchBar getOptions={this.getOptions} />
                </div>);
        } else {
            return (
                <div className={"search-div-center"}>
                    <div className={"list-inline list"}>
                        {tabs_data}
                    </div>
                    <IntentSearchBar getOptions={this.getOptions} />
                </div>);
        }
    }
}