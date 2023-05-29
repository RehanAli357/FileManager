import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import AuthCard from "../Pages/AuthCard";
const HomePage = lazy(() => import("../Pages/HomePage"));
const Error404 = lazy(() => import("../Pages/Error404"));
const AllRoutes = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<AuthCard />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="*" element={<Error404 />} />
        </Routes> 
      </Suspense>
    </React.Fragment>
  );
};

export default AllRoutes;
