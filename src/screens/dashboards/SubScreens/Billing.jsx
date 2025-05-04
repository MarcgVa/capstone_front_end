import React from 'react'

export default function Billing() {
  const role = window.sessionStorage.getItem("role");
  
  return (
    <div>
      <h1>Billing({role})</h1>
    </div>
  );
}
