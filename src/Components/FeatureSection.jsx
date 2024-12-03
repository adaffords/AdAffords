import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const FeatureSection = () => {
  return (
    <section className="featureSection">
        <div className="feature-main">
            <h1 className="feature-heading">
            Medium length section heading goes here
            </h1>
            {/* <h3 className="feautre-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </h3> */}
            <div className="feature-cards">
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
            <div className="feature-btns">
                <button className="btn learn-more"><Link>Learn More</Link></button>
                <button className="btn sign-up"><Link>Sign Up <i className='fa-solid fa-chevron-right'></i></Link></button>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection