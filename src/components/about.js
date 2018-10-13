import React, { Component } from 'react';
import '../style/About.css';
import logo from './about.svg';
import { Divider } from 'semantic-ui-react'

class About extends Component {
    render(){
    return(        
        <section id="about" className="about">
               <Divider horizontal><h1 className="about__title"><img className="about__logo" src={logo} alt='about'></img></h1>About</Divider>
            <div className="about__container">
                    <p>I am a Software Enginieer and an enthusiast problem solver who pays close attention on customers’ and business needs. I believe “We build societies together”. 
</p>
                    <p>During my education at DeVry University I always felt business by itself is not enough for me, until I took courses in web development. From that moment I found a new passion in programming. 
</p>
                <p>Currently I am looking for an opportunity to transition my career into Web Development with a knowledgeable team where I can grow as a valued team member. Preferably working with the MERN stack. </p>

                </div>
        </section>
    )
  }
}

export default About;