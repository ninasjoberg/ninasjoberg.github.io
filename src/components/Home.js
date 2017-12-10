import React, { Component } from 'react';
import './home.css';


export default class Home extends Component{


    render(){

        return(
            <div className="home">
                <section className="home-content">
                    <h1>Frontend By Nina</h1>
                    <p><span className="description">Här lägger jag upp de projekt jag gör under Frontend-utbildningen på Nackademin.</span></p>
                    <p><span className="description">ht16 - vt18</span></p>
                </section>
            </div>
        );
    }
}


