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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis odio vulputate tristique tincidunt. Vestibulum sed tellus eu libero gravida molestie. Etiam volutpat egestas laoreet. Nulla volutpat molestie elit, quis tincidunt velit aliquet ac. Donec accumsan ex non libero malesuada, sed euismod dui dignissim. Aliquam in ullamcorper mi, quis ultricies sapien. Cras congue odio et augue sollicitudin, at pretium nisi fermentum. Vestibulum ultrices felis eget risus commodo blandit. Mauris et ipsum magna. Integer ac nisi at neque auctor fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam accumsan nisi ac nisi bibendum lobortis. Morbi consectetur vel metus et tempus. Sed pellentesque placerat tortor, eget consequat dolor mollis non.</p>
                    <p>Cras maximus consectetur fringilla. Praesent ex nulla, varius quis augue id, feugiat congue quam. Integer et dolor vitae diam tempus venenatis. Curabitur non neque scelerisque, luctus felis ac, euismod purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut urna eros, pellentesque id ante et, bibendum efficitur massa. Donec hendrerit massa vel erat aliquet pellentesque. Vestibulum pharetra rhoncus blandit. Nullam vitae neque viverra, venenatis est ac, bibendum quam. Nulla scelerisque blandit porta. Duis blandit tempus justo vitae tincidunt.</p>
                </div>
        </section>
    )
  }
}

export default About;