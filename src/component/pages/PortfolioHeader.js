import React, { Component } from 'react'
import Header from '../common/Header'
import PortfolioContent from './PortfolioContent'
import image from '../assets/img/header-bg.jpg'
class PortfolioHeader extends Component{
    render(){
        return(
            <div>
                <Header
                    title=""
                    subTitle="Portfolio"
                    buttonText="Tell Me More"
                    showButton={false}
                    image={image}
                />
                <PortfolioContent/>
            </div>
        )
    }
}

export default PortfolioHeader