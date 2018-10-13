import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

import '../style/Social.css';


class Social extends Component {
    render(){
    return(        
        <section id="social" className="social">

            <div className="social__container">                       
            <a href="https://github.com/JasonCorp84" target="_blank"><Button circular size='massive' color='github' icon='github'/></a>
            <a href="https://twitter.com/CsaBalogh" target="_blank"><Button circular size='massive' color='twitter' icon='twitter' /></a>
            <a href="https://www.linkedin.com/in/csaba-balogh-1228647a/" target="_blank"><Button circular size='massive' color='linkedin' icon='linkedin' /></a>
            <Button circular size='massive' color='google plus' icon='google plus' />
                </div>
        </section>
    )
  }
}

export default Social;