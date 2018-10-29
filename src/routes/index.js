import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom'
// import Temp from "../components/";
import MainLayout from '../components/MainLayout';
import HomePage from '../components/HomePage';
import Error404 from '../components/Error404';

const Root = () => (
    <MainLayout>
        <HashRouter>
            <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                {/* <Route exact path="/login" render={() => <Temp />} /> */}
                <Route path="*" render={() => <Error404 />} />
            </Switch>
        </HashRouter>
    </MainLayout>
);

export default Root;
