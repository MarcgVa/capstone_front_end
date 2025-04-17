import React from 'react'

export default function OperationsDashBoardScreen() {
  return (
    <div className="grid grid-cols-3">
      <div className="bg-green-400 border h-100">1</div>
      <div className="bg-blue-400 border h-100">2</div>
      <div className="bg-amber-400 border row-span-2 ">3</div>
      <div className="bg-amber-400 border">3</div>
      <div className="bg-teal-400 border  h-100">4</div>
      <div className="bg-sky-400 border h-100">5</div>
      <div className="bg-red-400 border h-100">6</div>
      <div className="bg-purple-400 border h-100">7</div>
      <div className="bg-yellow-400 border h-100">8</div>
      <div className="bg-indigo-400 h-100">9</div>
    </div>
  );
}
