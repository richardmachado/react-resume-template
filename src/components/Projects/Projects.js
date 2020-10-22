import React, { Component } from 'react'
import './Projects.css';

export default class Projects extends Component {
    render() {
        return (
            <div className="container">
                <h1>Projects</h1>

                <div className="projects">
                    <a href="https://speak-out-bh.com/">
                    <div className="firstbox">
                            Speak Out Bahrain
                    </div>
                    </a>
                    <div className="secondbox">
                        Second Project
                    </div>                    <div className="thirdbox" alt="macintosh unsplash">
                        Third Project
                    </div>
                </div>


            </div>

        )
    }
}
