import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import "./layout.css"

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
