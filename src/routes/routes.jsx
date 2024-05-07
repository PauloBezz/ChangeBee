import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from '../pages/Home/index.jsx'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route Component={Home} path="/" exact></Route>
        </BrowserRouter>
    )
}

export default Routes;