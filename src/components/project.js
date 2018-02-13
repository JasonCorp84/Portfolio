import React, { Component } from 'react';
import Project from '../style/Project.css';
import htmlLogo from './html-5.svg';
import reactLogo from './react.svg';
import reduxLogo from './redux.svg';
import nodeJs from './nodejs-icon.svg';
import mongoDb from './mongodb.svg';
import css3 from './css3.svg';
import projects from './projects.svg';

class Menu extends Component {
    render(){
    return(
        <section id="projects" className="project">
                <img className="project__logo" src={projects} alt="projects"></img>
                <div className="project__container">
                 <div className="project__wrapper">
                  <div className="project__content">Reach out for new customers</div>
                    <div className="project__footer">
                      <img className="project__icon" src={htmlLogo} alt='html'></img>
                      <img className="project__icon" src={css3} alt='mongoDb'></img>
                      <img className="project__icon" src={reactLogo} alt='react'></img>
                      <img className="project__icon" src={reduxLogo} alt='redux'></img>
                      <img className="project__icon" src={nodeJs} alt='nodejs'></img>
                      <img className="project__icon" src={mongoDb} alt='mongoDb'></img>
                    </div>
                        
                    <div className="project">
                    <div className="project__content">Project Content</div>
                      <div className="project__footer">Technology used goes here</div>
                    </div>
                    <div className="project">
                    <div className="project__content">Project Content</div>
                      <div className="project__footer">Technology used goes here</div>
                    </div>
                 </div>
                </div>
            </section>
    )
  }
}

export default Menu;