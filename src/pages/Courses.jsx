import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
function Courses() {
const [open, setOpen] = useState(false);
  return (
    <div className="main">
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Core Java
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <h3>Core Java</h3>
          <ul>
            <li>JVM,JDK & JRE</li>
            <li>Data Types</li>
            <li>Operators</li>
            <li>Control Statements</li>
            <li>OOps Concepts</li>
            <li>Immutable & Mutable String</li>
            <li>Constructor In Java</li>
            <li>Interface </li>
            <li>Abstract Class</li>
            <li>Inheritance</li>
            <li>Static,Super & this keyword</li>
            <li>Polymorphism</li>
            <li>Collection Framework</li>
            <li>Multi Threading</li>
            <li>JDBC</li>
          </ul>
        </div>
      </Collapse>
      <div className="courses">
        
          
          
      </div>
    </div>
  );
}

export default Courses;
