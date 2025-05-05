import React from 'react'

export default function OpsLandingPage() {
  const role = window.sessionStorage.getItem('role');

  return (
    <div>
      <h1>OpsLandingPage({role})</h1>
    </div>
  );
}
