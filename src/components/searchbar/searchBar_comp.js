import React from 'react';
import { searchBarTabs } from "../../data/searchbar";
import { custom_request } from '../../services/searchbar-service';
import InstallTechSearchBar from './InstallTechSearchBar';
import IntentSearchBar from './IntentSearchBar';
import { INSTALLTECH, INTENT } from "../../placeholders";
import "./searchbar.scss";

const showNList = 10;


export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.maybeLoadOptions = this.maybeLoadOptions.bind(this);
        this.getOptions = this.getOptions.bind(this);
        this.state = {
            currentTab: null,
            currentLiState: null,
            optionsLoaded: false,
            isLoading: false,
            responseData: [],
            check: false,
            postCheckedValues: []
        }
    }

    componentDidMount = () => {
        document.body.addEventListener('click', this.myHandler);
        this.setState({ currentTab: INSTALLTECH })
    }

    componentWillUnmount = () => {
        document.body.removeEventListener('click', this.myHandler);
    }

    myHandler = () => {
        // alert('click');
    }

    getOptions = (input, callback) => {
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
        this.setState({ active: (e.target.getAttribute('class') == 'active' ? '' : 'active') });
    }

    maybeLoadOptions = () => {
        if (!this.state.optionsLoaded) {
            this.setState({ isLoading: true });
        }
    }

    toggleClass() {
        const currentLiState = this.state.active;
        this.setState({ active: !currentLiState });
    };

    handleKeyPress = (e) => {
        let eText = e.target.value;
        if (e.target.value === eText) {
            console.log(e.target.value);
        }
        let _this = this;
        custom_request(e.target.value).then(function (data) {
            if (data == null || data == undefined || data.length == 0) {
                return;
            } else {
                _this.setState({ responseData: data.data });
            }
        });
    }

    handleCheck = (e) => {
        if (!this.state.postCheckedValues.includes(e.target.value)) {
            this.state.postCheckedValues.push(e.target.value);
        } else {
            var array = [...this.state.postCheckedValues]; // make a separate copy of the array
            var index = array.indexOf(e.target.value)
            array.splice(index, 1)
            this.setState({
                postCheckedValues: array
            }, () => { console.log('new state', this.state.postCheckedValues); })
        }
    }

    handleSelectAllCheck = (e) => {
        if (e.target.checked) {
            this.setState({ postCheckedValues: null });
            let arr = [];
            this.state.responseData.slice(0, showNList).map((user, i) =>
                arr.push(user)
            );
            arr.forEach(e => {
                this.state.postCheckedValues.push(e);
            });
        } else {
            this.setState({ postCheckedValues: [] });
        }

        console.log(this.state.postCheckedValues);
    }

    checkIt = () => {
        this.setState({ check: true });
    }

    render = () => {
        return (
            <div className={'search-div-center col-lg-12'}>
                <div className={""}>
                    <div>
                        <div className={'group-inp-btn'}>
                            <input type='search' className={'form-control'} onKeyUp={this.handleKeyPress} />
                            <button type={'button'}>OK</button>
                        </div>
                        <DropDown
                            tick={this.state.check}
                            responseData={this.state.responseData}
                            handleSelectAllCheck={this.handleSelectAllCheck.bind(this)}
                            handleCheck={this.handleCheck.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}


class DropDown extends React.Component {

    render() {
        if (this.props.responseData.length > 0) {
            return (
                <div className={'dropdownClass'}>
                    <ul className={"myclass"}>
                        <li id={'selectAll'}>
                            <input onChange={(e) => this.props.handleSelectAllCheck(e)} type="checkbox" />
                            <span>Select All</span>
                        </li>
                        {
                            this.props.responseData.slice(0, showNList).map((user, i) =>
                                <li key={i}>
                                    <input
                                        value={user}
                                        onChange={(e) => this.props.handleCheck(e)}
                                        type="checkbox" />
                                    <span>{user}</span>
                                </li>)
                        }
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}