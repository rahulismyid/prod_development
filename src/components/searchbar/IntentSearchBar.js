import React from 'react';
import * as PropTypes from 'prop-types'
import AsyncSelect from 'react-select/lib/Async';

export default class InstallTechSearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    PropTypes = {
        // usersList: PropTypes.array.isRequired,
        // usersList: PropTypes.array,
        // selectedUsers: PropTypes.array,
        getOptions: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <AsyncSelect
                    isMulti
                    cacheOptions
                    defaultOptions
                    loadOptions={this.props.getOptions}
                />
            </div>
        );
    }
}