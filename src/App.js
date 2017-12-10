import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, } from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Header from './components/Header.js';


export default class App extends Component {

    render() {

        return (
            <div className="App">
                <Router>
                    <div className="content">
                        <Header />
                        <Route exact path="/home" component={Home} exact/>
                        <Route exact path="/projects" component={Projects} exact/>
                        <Route exact path="/about" component={About} exact/>
                        <Route render={() => { return <Redirect to="/home" /> }} />
                    </div>
                </Router>
            </div>
        );
    }
}