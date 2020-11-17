import React from "react";
import {
  BrowserRouter
} from "react-router-dom";
import './App.css';
import NavMenu from "./components/navmenu/navmenu.component";
import Pages from "./pages/pages.componenet";


export default function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Pages />
    </BrowserRouter>
  );
}

