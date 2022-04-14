/** @jsxImportSource @emotion/react */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";

export const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
