import React from "react";
import CheckedSelect from 'react-select-checked';

export default class CheckBoxBar extends React.Component {
    constructor(props) {
        super(props);
        this.getOptions = this.getOptions.bind(this);
        this.logChange = this.logChange.bind(this);
        this.state = {
            value: null
        }
    }


    logChange = (val) => {
        console.log('Selected value: ', val);
        setState({ value: val });
    }

    getOptions = (input, callback) =>  {
        setTimeout(function () {
            callback(null, {
                options: [
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' }
                ],
                // CAREFUL! Only set this to true when there are no more options,
                // or more specific queries will not be sent to the server.
                complete: true
            });
        }, 1000);
    }

    render = () => {
        <div>
            <CheckedSelect
                async
                loadOptions={this.getOptions}
                onChange={this.logChange}
                placeholder="Select your favourite(s)"
                value={this.state.value}
            />
        </div>
    }
}