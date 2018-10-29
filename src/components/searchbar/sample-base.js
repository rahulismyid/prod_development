import React from 'react';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default class SampleBase extends React.Component {
    rendereComplete() {
        /**custom render complete function */
    }
    componentDidMount() {
        this.rendereComplete();
    }
}
