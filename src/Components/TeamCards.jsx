import React from 'react'
import { Link } from 'react-router-dom'

const TeamCards = (props) => {
    return (
        <div className="team-card">
            <div className="team-card-img">

            </div>
            <h3 className="team-card-name">
                {props.name}
            </h3>
            <div className="team-card-role">
                {props.role}
            </div>
            <div className="team-card-role">
                {props.about}
            </div>
            <div className="team-card-socialMedia">
                <a>
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a>
                    <i className='fa-brands fa-facebook'></i>
                </a>
                <a>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}

export default TeamCards