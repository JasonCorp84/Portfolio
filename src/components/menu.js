import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './developer.svg';
import logo__menu from './menu.svg';
import '../style/Menu.css';


class Menu extends Component {
    render() {
        return(
<div className="menu">
    <div className="menu__mobile">
        <div class="navbar">
            <img className="mobile__logo" src={logo} alt='developer'></img>
            <div class="dropdown">
                <button class="dropbtn"><img className="menu__logo" src={logo__menu} alt='developer'></img> 
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#social">Contact</a>
                </div>
            </div> 
        </div>
    </div>
    <div className="menu__all">
    <div className="menu__logo">
        <a href="#intro"><img src={logo} alt='developer' href="#main"></img></a>
    </div>
    <div className="menu__wrapper" id="menu__wrapper">
        <div className="menu__left">
        </div>
    <div className="menu__right">
        <div className="menu__item"><a href="#about">About</a></div>
        <div className="menu__item"><a href="#projects">Projects</a></div>
        <div className="menu__item"><a href="#social">Contact</a></div>
    </div>
    </div>
    </div>
</div>
        )
    }
}




export default Menu;