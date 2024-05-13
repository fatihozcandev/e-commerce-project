import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import PageContent from "./layouts/PageContent.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <PageContent />
      <Footer />
    </BrowserRouter>
  </Provider>
);
