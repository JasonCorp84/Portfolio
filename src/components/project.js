import React, { Component } from 'react';
import Project from '../style/Project.css';
import htmlLogo from './html-5.svg';
import reactLogo from './react.svg';
import reduxLogo from './redux.svg';
import nodeJs from './nodejs-icon.svg';
import mongoDb from './mongodb.svg';
import css3 from './css3.svg';
import projects from './projects.svg';
import { Card, Icon } from 'semantic-ui-react'

const ConnectDescription = [
  'Reach out for new customer'
].join(' ')

const ElectionsDescription = [
  'Get to know your politician'
].join(' ')

const CapstoneDescription = [
 'Lambda School Capstone Project'
].join(' ')


class Menu extends Component {
    render(){
    return(
        <section id="projects" className="project">
                <img className="project__logo" src={projects} alt="projects"></img>

                <div className="project__container">
                 <div className="project__wrapper">
                  <div className="project__card">
                    <Card raised="true">
                      <Card.Content header='Connect' />
                      <Card.Content description={ConnectDescription} />
                      <Card.Content extra>
                      <img className="project__icon" src={htmlLogo} alt='html'></img>
                      <img className="project__icon" src={css3} alt='mongoDb'></img>
                      <img className="project__icon" src={reactLogo} alt='react'></img>
                      <img className="project__icon" src={reduxLogo} alt='redux'></img>
                      <img className="project__icon" src={nodeJs} alt='nodejs'></img>
                      <img className="project__icon" src={mongoDb} alt='mongoDb'></img>
                      </Card.Content>
                    </Card>
                    </div>

                    <div className="project__card">
                    <Card raised="true">
                      <Card.Content header='Elections' />
                      <Card.Content description={ElectionsDescription} />
                      <Card.Content extra>
                      <img className="project__icon" src={htmlLogo} alt='html'></img>
                      <img className="project__icon" src={css3} alt='mongoDb'></img>
                      <img className="project__icon" src={reactLogo} alt='react'></img>
                      <img className="project__icon" src={reduxLogo} alt='redux'></img>
                      <img className="project__icon" src={nodeJs} alt='nodejs'></img>
                      <img className="project__icon" src={mongoDb} alt='mongoDb'></img>
                      </Card.Content>
                    </Card>
                    </div>

                    <div className="project__card">
                    <Card raised="true">
                      <Card.Content header='Capstone' />
                      <Card.Content description={CapstoneDescription} />
                      <Card.Content extra>
                      <img className="project__icon" src={htmlLogo} alt='html'></img>
                      <img className="project__icon" src={css3} alt='mongoDb'></img>
                      <img className="project__icon" src={reactLogo} alt='react'></img>
                      <img className="project__icon" src={reduxLogo} alt='redux'></img>
                      <img className="project__icon" src={nodeJs} alt='nodejs'></img>
                      <img className="project__icon" src={mongoDb} alt='mongoDb'></img>
                      </Card.Content>
                    </Card>
                    </div>
                 </div>
                </div>
            </section>
    )
  }
}

export default Menu;