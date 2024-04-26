import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import PageContent from "./layouts/PageContent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <PageContent />
    <Footer />
  </BrowserRouter>
);
