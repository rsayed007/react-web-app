import React, { Component } from 'react'
import TeamItem from './TeamItem'

// image 
import team1 from '../assets/img/team/1.jpg'
import team2 from '../assets/img/team/2.jpg'
import team3 from '../assets/img/team/3.jpg'

const teamItems = [
    {teamName: 'Kay Garland', teamDesignation: 'Lead Designer', image: team1},
    {teamName: 'Roman Syed', teamDesignation: 'Lead Developer', image:team2},
    {teamName: 'Diana Petersen', teamDesignation: 'Lead Marketer', image:team3}
]

class TeamMemberContent extends Component{
    render(){
        return(
            <div>
                <section className="page-section bg-light" id="team">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            { teamItems.map((item, index) =>{
                                return <TeamItem {...item} key={index} />
                            }) }
                            
                            
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default TeamMemberContent