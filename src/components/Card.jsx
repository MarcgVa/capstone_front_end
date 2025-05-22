import React from 'react'

export default function Card({plan}) {
  console.log('plan', plan);
  return (
    <div
      className="service-plan bg-gradient-to-bl 
        from-teal-950 via-zinc-800 to-yellow-400 from-30% via-60% to-98% "
    >
      <div className="plan-title">{plan.title}</div>
      <div className="plan-description from-zinc-100 to-yellow-400 from-35% to-70% bg-gradient-to-tr bg-clip-text text-transparent">
        {plan.description}
      </div>
      <div className="plan-cost">
        {plan?.cost === 0 ? null : <span className='text-amber-500'>${plan.cost}</span>}
        <span className='text-zinc-400'>
          {plan?.cycle === 1
            ? "/hour"
            : plan?.cycle === 2
            ? "/request"
            : plan?.cycle === 0
            ? "Info"
            : "/month"}
        </span>
      </div>
    </div>
  );
}
