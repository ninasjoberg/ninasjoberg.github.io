import React, { Component } from 'react';
import './about.css';


export default class About extends Component{


    render(){

        return(
            <div className="about">
                <section className="about-content">
                    <div className="likes">
                        <h4>Jag gillar att:</h4>
                        <p><span>klättra</span></p>
                        <p><span>segla</span></p>
                        <p><span>silversmida</span></p>
                        <p><span>odla och plantera snygga växter</span></p>
                        <p><span>bygga och skapa saker</span></p>
                    </div>
                    <div className="contact">
                        <h4>Kontakt och mer info:</h4>
                        <a href="https://github.com/ninasjoberg" target="_blank"><span>github</span></a>
                        <a href="https://www.linkedin.com/in/nina-sj%C3%B6berg-9aa71b22/" target="_blank"><span>linkedIn</span></a>
                        <a href="mailto: nina.sjoberg@gmail.com"><span>mail</span></a>
                        <a href="http://www.bellpepper.se" target="_blank"><span>webshop</span></a>
                    </div>
                </section>
            </div>
        );
    }
}
