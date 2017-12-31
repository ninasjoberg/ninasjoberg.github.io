import React from 'react';
//import { Button } from 'react-router-dom';
import './header.css';


export default function Header(props) {

    return (
        <div className="header">
            <section className="nav-icon">
				<a href="https://github.com/ninasjoberg" target="_blank">
					<span className="fa fa-github fa-3x" aria-hidden="true"></span>
				</a>
				<a href="https://www.linkedin.com/in/nina-sj%C3%B6berg-9aa71b22/" target="_blank">
					<span className="fa fa-linkedin-square fa-3x" aria-hidden="true"></span>
				</a>
			</section>
            <section className="header-links">
                <button className={props.currentPage === "home" ?  "active-menybutton" : "menybutton"} onClick={() => props.goTo('home')}>Home</button>
                <button className={props.currentPage === "projects" ?  "active-menybutton" : "menybutton"} onClick={() => props.goTo('projects')}>Projects</button>
                <button className={props.currentPage === "about" ?  "active-menybutton" : "menybutton"} onClick={() => props.goTo('about')}>About</button>
            </section>
        </div>
    )
}


