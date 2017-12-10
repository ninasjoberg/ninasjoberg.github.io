import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';


export default function Header() {
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
                <NavLink className="link" activeClassName="selected" to="/home">Home</NavLink>
                <NavLink className="link" activeClassName="selected" to="/projects">Projects</NavLink>
                <NavLink className="link" activeClassName="selected" to="/about">About</NavLink>
            </section>
        </div>
    )
}


