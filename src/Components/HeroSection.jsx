import React from 'react'
import { Link } from 'react-router-dom'
import Blur from './Blur'
const HeroSection = () => {
  return (
    <section className="hero">
        <Blur/>
        <div className="hero-main">
        <h1 className="hero-heading">
            Transform Your Advertising with AdAfford Today
        </h1>
        <h3 className="hero-paragraph">
            AdAfford connects your brand with the right influencers to create impactful campaigns that resonate with your audience. Discover budget-friendly solutions that empower your marketing efforts and drive results.
        </h3>
        <div className="hero-btns">
            <button className="btn learn-more"> 
                <Link>
                    Learn More
                </Link>
            </button>
            <button className="btn sign-up">
                <Link>
                    Sign Up
                </Link>
            </button>
        </div>
        </div>
    </section>
  )
}

export default HeroSection