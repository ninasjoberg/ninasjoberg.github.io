import React, { Component } from 'react';
import './App.css';
//import { HashRouter as Router, Route, Redirect, } from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Header from './components/Header.js';


const routes = {
    home: Home,
    projects: Projects,
    about: About
}


export default class App extends Component {

    state = {
        currentPage: 'home',
    }

    changePage = (page) => {
        this.setState({currentPage: page})
    }

    render() {

        const Page = routes[this.state.currentPage];

        return (
            <div className="App">
                <div className="content">
                    <Header goTo={this.changePage} currentPage={this.state.currentPage}/>
                    <Page goTo={this.changePage} currentPage={this.state.currentPage}/>
                </div>
            </div>
        );
    }
}