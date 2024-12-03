import React from 'react'
import { Link } from 'react-router-dom'

const ConvincingSection = () => {
  return (
    <section className="convincingSection">
        <div className="left">
            <h1 className="left-heading">
                Unlock Your Advertising Potential
            </h1>
            <div className="left-paragraph">
                Join AdAfford today and transform your advertising strategy with our user-friendly platform.
            </div>
            <div className="left-btns">
                <button className="btns sign-up">
                    <Link>Sign up</Link>
                </button>
                <button className="btns learn-more">
                    <Link>Learn More</Link>
                </button>
            </div>
        </div>
        <div className="right">

        </div>
    </section>
  )
}

export default ConvincingSection