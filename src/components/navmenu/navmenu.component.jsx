import React from "react";
import { connect } from 'react-redux';
import { Route, Link, NavLink } from "react-router-dom";

import '../../App.style.scss';
import './navmenu.style.scss';
import {mapStateToProps} from '../../redux/navitemreducer';


function NavMenu(props) {
    console.log('NavMenu: ', props);
    function setLinks(urls) {
        let links = []
        if (!urls)
            return;
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
                {setLinks(props.navURL)}
            </ul>
        </Route>
    );
}

export default connect(mapStateToProps)(NavMenu);