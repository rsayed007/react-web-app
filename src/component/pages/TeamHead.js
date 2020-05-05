import React, {Component} from 'react'
import Header from '../common/Header'
import TeamMemberContent from './TeamMemberContent'

import image from '../assets/img/header-bg.jpg'

class TeamHead extends Component{
    render(){
        return(
            <div>
                <Header
                    title=""
                    subTitle="Team"
                    buttonText="Tell Me More"
                    showButton={false}
                    image={image}
                />
                <TeamMemberContent />
            </div>
        )
    }
}

export default TeamHead