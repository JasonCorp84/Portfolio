import React, { Component } from 'react';
import './style/App.css';
import Menu from './components/menu.js';
import Main from './components/main.js';
import Project from './components/project.js';
import About from './components/about.js';
import Social from './components/social';
import { Divider } from 'semantic-ui-react'
import Footer from './components/footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu /><br/>
        <Main />
        <About />
        <Project />
        <Social />
        <Footer />
      </div>
    );
  }
}


export default App;
