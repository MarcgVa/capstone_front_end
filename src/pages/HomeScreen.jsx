import React from 'react'
import logo from '../assets/logo.png'
import remmi from '../assets/remmi.png'
import house from '../assets/house.png'



export default function HomeScreen() {
  return (
    <div className='page-layout'>
      
      <section className='main'>
        <div className="wrapper">
          <img src={logo} alt="Grupe Lawncare" className="logo" />
          <h2 className="section-title logo-title">
            Safer lawn care with a team you can trust.
          </h2>
          <p></p>
        </div>
      </section>
      
      <section className="pet-safe">
        <div className="wrapper">
          <h2 className="section-title pet-safe-title">Organic</h2>
          <p>
            The safety of your family and the environment is our top priority.
            The products we use are organic-based, EPA approved, and thoroughly
            tested before we let them near your family.
          </p>
        </div>
        <div>
          <img src={remmi} alt="remmi" className="" />
        </div>
      </section>
      
      <section className="no-lawn-the-same">
        <div>
          <img src={house} alt="" />
        </div>
        <div className="wrapper">
          <h2 className="section-title ">No two lawns are the same.</h2>
          <p>
            That's why we provide a free lawn analysis with each consultation.
            During the site visit our lawn specialist will listen to your
            concerns, evaluate your grass, and soil conditions to provide you
            with a customized plan.
          </p>
        </div>
      </section>

      <section className="mission">
        <div className="wrapper">
          <h2 className="section-title mission-title">Our Mission</h2>
          <p>
            It is our mission to provide the best organic-based lawn care
            service and help our customers understand the importance of
            environmentally friendly lawn care techniques that don't rely on
            unnecessary or irresponsible pesticide use.
          </p>
        </div>
      </section>
    </div>
  );
}
