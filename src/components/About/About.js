import React, { Component } from "react";
import './About.css';

import coding from './coding.jpg'
export default class About extends Component {
  render() {
    return (
      <div  className="container">
        <h1>About me</h1>
            <h2>Education</h2>
        <div className="school_container">        
            <div className="school_info">
            <p className="school_name">Lambda School Inc</p>
            <p className="dates_of_attendance">Dates of Attendance: July 2019 - current</p>
                <p className="lambda_info">Full Stack Web Development: Starting with HTML, CSS and then quickly diving into JavaScript and developing using React. Next, creating web servers using Node.js and PostgreSQL. Finally learning basic computer architecture with Python. Lambda school not only teaches the material, but also teaches you to problem solve and learn any programming language.</p>
            </div>
            
            <div className="picture_container">
                <img src={coding} alt="True Agency on Unsplash" />
            </div>
        </div>

      </div>
    );
  }
}
