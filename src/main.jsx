import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Suspense } from "react";
import Loader from "./js/components/Loader.jsx";

const LazyLoad = React.lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <LazyLoad />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
