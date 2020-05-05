import React, {Component} from 'react'

class Header extends Component{
    render(){
        console.log(this.props.image)
        return(
            <div>
                <header className="masthead" style={{backgroundImage: `url(${this.props.image})`}}>
                    <div className="container">
                        <div className="masthead-subheading"> {this.props.title} </div>
                        <div className="masthead-heading text-uppercase"> {this.props.subTitle} </div>
                        
                        { this.props.showButton && 
                            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services"> {this.props.buttonText} </a>
                        }
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;