import React, { Component } from "react"
import Header from '../common/Header'
import image from '../assets/img/flower.jpg'
// D:\bookworm\webApp\src\component\assets\img\flower.jpg
class Home extends Component{

    render(){
        return(
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subTitle="It's Nice To Meet You"
                    buttonText="Tell Me More"
                    showButton={true}
                    image={image}
                />
                {/* <header className="masthead">
                    <div className="container">
                        <div className="masthead-subheading"></div>
                        <div className="masthead-heading text-uppercase"></div>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services"></a>
                    </div>
                </header> */}
            </div>
        )
    }
}
export default Home;