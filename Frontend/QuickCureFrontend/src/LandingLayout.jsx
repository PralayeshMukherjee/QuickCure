import React from "react";
import { Header, Footer } from "./index.js";
import { Outlet } from "react-router-dom";

function LandingLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LandingLayout;
