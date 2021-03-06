import React from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import { mapDispatchToProps } from "./redux/navitemreducer";
import PagesURL from "./pages/pages.component";

import "./App.style.scss";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

class App extends React.Component {
  componentDidMount() {
    const url = this.getMenuLinks();
    this.props.setNavAction({ ...url });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <PagesURL />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

  getMenuLinks() {
    return {
      "/": { text: "Home", parent: "root", exact: true },

      "/About": { text: "About", parent: "root", exact: true },

      "/Products": { text: "Gallery", parent: "root", exact: true },
      "/Products/sample product": { text: "Product", exact: true },
    };
  }
}

export default connect(null, mapDispatchToProps)(App);
