import React from 'react'

export default function Services() {
 const role = window.sessionStorage.getItem("role");

  return (
    <div><h1>Services({role})</h1></div>
  )
}
