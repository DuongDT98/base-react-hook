/**
 * Entry application component used to compose providers and render Routes.
 * */

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../app/Routes";

export default function App({ store, basename }) {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Override `basename` (e.g: `homepage` in `package.json`) */}
      <BrowserRouter basename={basename}>
        {/* Render routes with provided `Layout`. */}
        <Routes />
      </BrowserRouter>

    </Provider>
  );
}
