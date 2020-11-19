import React from "react";
import '../../App.style.scss';
import { Route, Link, NavLink } from "react-router-dom";

import './navmenu.style.scss';




export default function NavMenu(props) {
    function setlinks(urls) {
        let links = []
        for (const [key, value] of Object.entries(urls)) {
            if (value.parent === "root")
                links.push(<li key={key}><NavLink exact={value.exact} activeClassName="red" to={key}>{value.text}</NavLink></li>);
            else
                links.push(<li key={key}><Link to={key}>{value.text}</Link></li>);
        }
        return links;
    }
    return (
        <Route>
            <ul>
                {setlinks(props.urls)}
            </ul>
        </Route>
    );
}

