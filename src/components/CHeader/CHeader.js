import { Component } from "react";

class CHeader extends Component {
    render() {
        let items = this.props.components.map((components, i) => {
            let className = "";
            if (this.state.components == i) {
                className = 'active';
            }
            return (
                <li role="presentation" className={className} key={i}>
                    <a href="#" onClick={this.showSample.bind(this, i)}>{components.name}</a>
                </li>
            )
        });
        return <ul className="nav nav-pills pull-right">{items}</ul>;
    }

    componentDidMount() {
        this.showSample(this.state.components);
    }

    getInitialState() {
        let components = localStorage.getItem("components") || 0;
        return {components};
    }

    showSample(i) {
        var container = document.getElementById('content');
        React.unmountComponentAtNode(container);
        if (i > -1) {
            let component = this.props.components[i].fn();
            React.render(component, container);
        }
        localStorage.setItem("components", i);
        this.setState({components: i});
    }
}

export default CHeader;