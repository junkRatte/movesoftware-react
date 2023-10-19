import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Suspense } from "react";
import Loader from "./js/components/Loader.jsx";

const LazyLoad = React.lazy(() => import("./App.jsx"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename="/">
        <LazyLoad />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
