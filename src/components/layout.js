import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import "./layout.css";
import "@fontsource/bangers";
import "@fontsource/marvel";
import "@fontsource/roboto-slab";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gatsbelistical | by Alvison Hunter</title>
        <link rel="canonical" href="http://alvisonhunter.com/gatsby" />
      </Helmet>
      <div className="container bg-transparent h-screen mx-auto p-4">
        <Navbar />
        {children}
      </div>
    </React.Fragment>
  );
}
