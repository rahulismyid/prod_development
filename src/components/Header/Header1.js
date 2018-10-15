import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./header.scss";

// const imgMyimageexample = require('../assets/imageexample.jpg');
const divStyle = {
    /* Full height */
    height: '100%',

    /* Center and scale the image nicely */
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '88%',
    // backgroundImage: `url(${imgMyimageexample})`,
    backgroundImage: `url(http://wallpaperheart.com/wp-content/uploads/2018/04/awesome-wallpaper-hd-for-desktop-full-screen-desktop-wallpaper-hd-full-screen-nature.jpg)`,

    backgroundSize: 'cover' //< ---- This is important
};


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
                                        {/* <li><Link to="/">Home</Link></li>
                                <li><Link to="login">Login</Link></li>
                                <li><Link to="example">Click Me!</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;