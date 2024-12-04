import React from 'react'
import TeamCards from './TeamCards'

const TeamSection = () => {
  return (
    <section className="teamSection">
        <div className="team-main">
            <div className="team-first">Team</div>
            <h1 className="team-second">Our Team</h1>
            <div className="team-third">Meet the passionate individuals driving AdAfford's success.</div>
            <div className="team-fourth">
                <TeamCards
                name="Mohd. Arslan"
                role="CEO & Founder"
                about="Arslan leads the vision and strategy for AdAfford, driving innovation in digital marketing."
                />
                <TeamCards
                name="Mohd. Mohtashim"
                role="Marketing Director"
                about="Mohtashim crafts compelling campaigns that connect brands with their audiences through influencers."
                />
                <TeamCards
                name="Mohd. Aamil"
                role="Content Strategist"
                about="Aamil develops engaging content that resonates with our clients' target markets."
                />
                <TeamCards
                name="Shahid Jamal"
                role="Tech Lead"
                about="Shahid ensures our platform runs smoothly, enhancing user experience and functionality."
                />
            </div>
        </div>
    </section>
  )
}

export default TeamSection