import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./header.scss";

class Header extends Component {
    render() {
        return (
            <div className={"parent"}>
                <div className={"child"}>
                    <div className={'container'}>
                        <nav className="navbar navbar-default">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <a className="navbar-brand pull-left" href="#">Brand</a>
                                    <ul className="nav nav-pills pull-left">
                                        <li role="presentation"><a href="#">Home</a></li>
                                        <li role="presentation"><a href="#/login">About</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className={"modal-body"}>
                    <div className={"col-md-6 left-side"}>
                        <span>InstallTech</span>
                    </div>
                    <div className={"col-md-6 right-side"}>
                        <span>Intent</span>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Header;