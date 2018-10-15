import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/styles/app.scss";
import { Route, Link } from 'react-router-dom';

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

    constructor() {
        super();
        // this.addActiveClass = this.addActiveClass.bind(this);
        this.state = {
            sample: localStorage.getItem("sample") || 0,
            active: false,
        };
    }
    
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    
    toggleListClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
    };

    render() {
        return (
            <div className={"parent"}>
                <div className={"child"}>
                <section className={"navigation"}>
                        <div className={"nav-container"}>
                        <div className={"brand"}>
                            <a href="#!">Logo</a>
                        </div>
                        <nav className={this.state.active ? 'nav nav-main nav-main-mobile' : 'nav'}>
                        {/* <nav className={'nav-main-ul'}> */}
                        <div className={"nav-mobile"}><a id="nav-toggle" href="#!" className={this.state.active ? 'active' : null}
                                            onClick={this.toggleClass.bind(this)}><span></span></a></div>
                            {/* <div className={"nav-mobile"}><a id="nav-toggle" href="#!"><span></span></a></div> */}
                            <ul className={"nav-list"}>
                            <li>
                                <a href="#">Home</a>
                                {/* <Link to="/login">Home</Link> */}
                            </li>
                            <li>
                                <a href="#!">About</a>
                            </li>
                            <li>
                                <a onClick={this.toggleListClass.bind(this)} href="#!">Services</a>
                                <div className={"nav-dropdown"}><a id="nav-dropdown" href="#!" className={this.state.active ? 'active' : null}
                                            onClick={this.toggleListClass.bind(this)}><span></span></a>
                                <ul className={"nav-dropdown"}>
                                <li>
                                    <a href="#!">Web Design</a>
                                </li>
                                <li>
                                    <a href="#!">Web Development</a>
                                </li>
                                <li>
                                    <a href="#!">Graphic Design</a>
                                </li>
                                </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#!">Pricing</a>
                            </li>
                            <li>
                                <a href="#!">Portfolio</a>
                                <ul className={"nav-dropdown"}>
                                <li>
                                    <a href="#!">Web Design</a>
                                </li>
                                <li>
                                    <a href="#!">Web Development</a>
                                </li>
                                <li>
                                    <a href="#!">Graphic Design</a>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!">Contact</a>
                            </li>
                            {/* <li>
                                <Link to="/login">Login</Link>
                                {/* <button class="btn btn-danger navbar-btn">Login</button> 
                            </li> */}
                            </ul>
                        </nav>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Header;