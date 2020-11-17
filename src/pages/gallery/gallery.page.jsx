import React from "react";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import Topic from "../topics/topic.page";
import Product from "../products/products.page";


export default function Gallery(props) {
    let match = useRouteMatch();
    return (
        <div>
            <h2>Gallery</h2>
            <ul>
                <li><Link to={`${match.url}/item1`} >Product 1</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}
