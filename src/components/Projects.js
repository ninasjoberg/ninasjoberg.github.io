import React, { Component } from 'react';
import Project from './Project.js';
import databaseImg from '../images/moviedb.jpg';
import foodGeneratorImg from '../images/middagstips.jpg';
import openapiImg from '../images/openapi.jpg';
import plantifyImg from '../images/plantify.jpg';
import todoImg from '../images/todo_list.jpg';
import vanillaImg from '../images/vanilla.jpg';
import challenger from '../images/challenger.jpg';
import portfolio1Img from '../images/portfolio1.jpg';
import phpBlogImg from '../images/php_blog.jpg';
import './projects.css';



export default class Projects extends Component{


    render(){

        const projectsArray = [
            {
                time: "sep 2017",
                image: challenger,
                course: "Kurs: JavaScript 3",
                task: `"Skapa en applikation i React där användare kan logga in och ut samt interagera med andra. Skapa och använd dig av en databas i Firebase."`,
                src: "https://challenger-app.now.sh"
            },
            {
                time: "maj 2017",
                image: phpBlogImg,
                course: "Kurs: CMS, PHP och MySQL",
                task: `"Skapa en blog som fungerar som ett cms där användaren kan lägga till, editera och ta bort info. PHP och MySQL."`,
            },
            {
                time: "mar 2017",
                image: openapiImg,
                course: "Kurs: JavaScript 2",
                task: `"Skapa en applikation som hämtar data från öppna API:er. Fokus på Ajax och designmönster. Vanilla JS"`,
                src: "http://openapi.surge.sh/"
            },
            {
                time: "feb 2017",
                image: databaseImg,
                course: "Kurs: JavaScript 2",
                task: `"Skapa en applikation som är en filmdatabas. Fokus på designmönster, Vanilla JS"`,
                src: "https://ninasjoberg.github.io/MovieDatabase/"
            },
            {
                time: "jan 2017",
                image: vanillaImg,
                course: "Kurs: HTML & Css",
                task: `"Skapa en websida för er egna fiktiva webbyrå. Fokus på responsivitet"`,
                src: "https://ninasjoberg.github.io/vanilla/"
            },
            {
                time: "dec 2016",
                image: portfolio1Img,
                course: "Eget projekt",
                task: `En portfolio för att samla mina projekt och använda vid sök av praktik. Vanilla JS.`,
                src: "https://ninasjoberg.github.io/index.html"
            },
            {
                time: "nov 2016",
                image: plantifyImg,
                course: "Kurs: HTML & Css",
                task: `"Skapa en enkel webbsida för fiktiva företaget Plantify"`,
                src: "https://ninasjoberg.github.io/Plantify/"
            },
            {
                time: "okt 2016",
                image: todoImg,
                course: "Kurs: JavaScript 1",
                task: `"Skapa en ToDo-app i Vanilla JS"`,
                src: "https://ninasjoberg.github.io/ToDo-List/"
            },
            {
                time: "okt 2016",
                image: foodGeneratorImg,
                course: "Kurs: JavaScript 1",
                task: `"Skapa en sida som genererar recept i Vanilla JS"`,
                src: "https://ninasjoberg.github.io/Middagstips/"
            },
        ]

        const projects = projectsArray.map((project, index) => {
            console.log(project);
            return <Project time={project.time} img={project.image} course={project.course} task={project.task} src={project.src}/>
        })

        return(
            <div className="projects">
                <section className="timeline">
                    <ul>
                        {projects}
                    </ul>
                </section>
            </div>
        );
    }
}