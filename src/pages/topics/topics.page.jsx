import React from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import Topic from "./topic.page";
// import Product from "../products/products.page";

export default function Topics(props) {
    let match = useRouteMatch();
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li><Link to={`${match.url}/components`}>Components</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}
