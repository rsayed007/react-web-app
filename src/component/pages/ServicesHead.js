import React, { Component } from 'react'
import Header from '../common/Header'
import image from '../assets/img/header-bg.jpg'
import ServicesContent from './ServicesContent'


class ServicesHead extends Component{
    render(){
        return(
            <div>
                <Header
                    title=""
                    subTitle="Services"
                    buttonText="Tell Me More"
                    showButton={false}
                    image={image}
                />
                <ServicesContent/>
            </div>
        )
    }
}

export default ServicesHead