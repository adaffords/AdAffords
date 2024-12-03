import React from 'react'
import { Link } from 'react-router-dom'

const BenefitSection = () => {
  return (
    <section className="benefitSection">
        <div className="benefit-main">
            <div className="benefit-top">
                <div className="benefit-top_left">
                    <div className="top">
                        Empower
                    </div>
                    <h1 className="bottom">
                        Unlock Your Marketing Potential with AdAfford
                    </h1>
                </div>
                <div className="benefit-top_right">
                    <div className="top">
                        AdAfford connects you with the right influencers to amplify your brand's message. Our platform is designed to help you achieve your marketing goals without breaking the bank. Experience seamless collaboration and measurable results that drive growth.
                    </div>
                    <div className="bottom">
                        <div className="btns">
                            <button className="learn-more btn">
                                <Link>Learn More</Link>
                            </button>
                            <button className="Sign-up btn">
                                <Link>Sign Up <i className='fa-solid fa-chevron-right'></i></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="benefit-bottom">
                
            </div>
        </div>
    </section>
  )
}

export default BenefitSection