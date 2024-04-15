import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Watch } from "../components/Watch";
import { Navbar } from "../components/Navbar";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/watch"
        element={
          <>
            <Navbar />
             <Watch />
            
          </>
        }
      />
    </Routes>
  );
};
