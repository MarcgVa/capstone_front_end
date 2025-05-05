import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";


import React from 'react'

export default function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}
