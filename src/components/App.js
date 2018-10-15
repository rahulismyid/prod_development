// import React, { Component } from "react";
// import Header from "./Header";
// import Temp from "./temp";
// import SearchBar from "./searchbar/searchBar_comp";
// import { BrowserRouter as Router, HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
// import "../css/main.scss";

// import Routes from "../routes";


// // export default () => <div><Routes/></div>;

// class App extends Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (

//             <div className={'app text-center'}>
//                 <Header />
//                 <Route path="/login" render = {() => {<Temp/>}} />
//                 {/* <Switch> */}
//                     {/* {this.props.children} */}

//                 {/* </Switch> */}
//             </div>
//         );
//     }
// }

// export default App;















import React from "react";
import Temp from "./temp";
import MainLayout from "./MainLayout";


import { Switch, BrowserRouter, Route } from 'react-router-dom';
// var { Router, Route, IndexRoute, Link } = ReactRouter;


export default class Routes extends React.Component {
    render() {
        return <BrowserRouter>


            <Switch>
                <Route path="/" component={MainLayout} />
                <Route exact path="/" component={Temp} />
                {/* <Route path="/main/single" component={SingleChat} />
                <Route path="/main/group" component={GroupChat} /> */}
                {/* <Route path="/login" component={Temp} /> */}
            </Switch>
            {/* <Switch> */}
            {/* <Route path="/" component={MainLayout} /> */}
            {/* <Route path="/" component={MainLayout} >
                    <Route path="/login" component={Temp} />
                </Route> */}
            {/* <IndexRoute component={Home} /> */}
            {/* </Route> */}
            {/* </Switch> */}
        </BrowserRouter>;
    }
};