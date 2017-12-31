import React from 'react';

import './projects.css';

export default function Project (props) {

    return (
        <li>
            <div className="project-wrapper">
                <time>{props.time}</time>
                <section className="box">
                    <img className="img-project" src={props.img}/>
                    <figure className="hover-box">
                        <p>{props.course}</p>
                        <p>{props.task}</p>
                        {props.src && <a href={props.src} target="_blank">Länk till sidan</a>}
                    </figure>
                </section>
            </div>
        </li>
    )
}