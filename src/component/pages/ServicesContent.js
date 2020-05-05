import React, { Component } from 'react'
import SingleService from './SingleService'

const services = [
    {serviceTitle: 'E-commerce', serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-shopping-cart'},
    {serviceTitle: 'Responsive Design', serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-shopping-cart'},
    {serviceTitle: 'Web Security', serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-shopping-cart'}
]

class ServicesContent extends Component{
    render(){
        return(
        <div>
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row text-center">
                        {services.map((service, index) =>{
                            return <SingleService {...service} key={index} />
                        })}
                        
                        
                    </div>
                </div>
            </section>
        </div>
        )
    }
}

export default ServicesContent