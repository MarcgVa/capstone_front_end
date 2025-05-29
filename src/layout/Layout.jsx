import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";


import React from 'react'
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
