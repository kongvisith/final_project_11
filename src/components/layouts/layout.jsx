import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
