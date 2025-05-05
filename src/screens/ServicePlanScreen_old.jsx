import React from 'react'


export default function ServicePlanScreen() {
  return (
    <div className="service-plan-wrapper">
      <section className="service-plan-grid">
        <article className="service-plan">
          <div className="article-title">7-Day Cut</div>
          <div>
            <ul className="">
              <li>Trimming</li>
              <li>Mowing</li>
              <li>Edging</li>
              <li>Seasonal Maintenance</li>
            </ul>
          </div>
        </article>

        <article className="service-plan">
          <div className="article-title">10-Day Cut</div>
          <div>
            <ul className="">
              <li>Trimming</li>
              <li>Mowing</li>
              <li>Edging</li>
              <li>Seasonal Maintenance</li>
            </ul>
          </div>
        </article>

        <article className="service-plan">
          <div className="article-title">14-Day Cut</div>
          <div>
            <ul className="">
              <li>Trimming</li>
              <li>Mowing</li>
              <li>Edging</li>
              <li>Seasonal Maintenance</li>
            </ul>
          </div>
        </article>

        <article className="service-plan">
          <div>
            <h2 className="article-title">
              Additional Services Offered
            </h2>
          </div>
          <div>
            <ul className="">
              <li>Bed Maintenance</li>
              <li>Leaf Removal</li>
              <li>Snow Removal</li>
              <li>Tree Pruning</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
