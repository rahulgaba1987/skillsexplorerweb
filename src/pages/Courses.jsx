import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import JavaImage from '../asset/java.png';
function Courses() {
const [open, setOpen] = useState(false);
  return (
    <div className="main">

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={JavaImage} />
      <Card.Body>
        <Card.Title>Core Java</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Core Java
      </Button>
      </Card.Body>
    </Card>
        
      <Collapse in={open}>
        <div id="example-collapse-text">
            <br/>
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
