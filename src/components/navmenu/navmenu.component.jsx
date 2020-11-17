import React from "react";
import { Link, NavLink} from "react-router-dom";



export default function NavMenu() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
        </div>
    );
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
