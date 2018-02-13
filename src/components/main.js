import React, { Component } from 'react';
import '../style/Main.css';


class Main extends Component {
    render(){
    return(
            <section id="intro" className="intro">
             <article className="intro__container">
                <span className="intro__title">Hello.</span>
                My name is Csaba. I'm a Southern California based full-stack developer who loves to create reliable and scalable web applications.
                </article>
            </section>
    )
  }
}

export default Main;