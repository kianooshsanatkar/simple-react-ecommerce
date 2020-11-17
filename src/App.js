import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';


export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <RoutingURLs />
      </div>
    </Router>
  );
}


function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink to="/about" activeClassName='imselected' >About</NavLink>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}


function RoutingURLs() {
  return (
    <div>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/topics" component={Topics} />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path=''>
        <h1>404</h1>
      </Route>
    </Switch>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics(props) {
  let match = useRouteMatch();
  console.log(props);
  console.log(match);

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
        <li>
          <button onClick={props.history.goBack}>Back</button>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}