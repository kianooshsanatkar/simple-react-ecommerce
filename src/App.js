import React from 'react'
import './App.style.scss';
import { BrowserRouter } from "react-router-dom";
import PagesURL from "./pages/pages.component";
import NavMenu from './components/navmenu/navmenu.component';
import Footer from './components/footer/footer.component'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      urls: {}
    }
  }

  componentDidMount() {
    this.setState({ urls: this.getMenuLinks() });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavMenu urls={this.state.urls} />
          <PagesURL />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

  getMenuLinks() {
    return (
      {
        "/": { text: "Home", parent: 'root', exact: true },

        "/About": { text: "About", parent: 'root', exact: true },

        "/Products": { text: "Gallery", parent: 'root', exact: true },
        "/Products/sample product": { text: "Product", exact: true },

      }

    );
  }
}