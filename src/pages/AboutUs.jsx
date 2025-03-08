import React from 'react'

function AboutUs() {
  return (
    <div className="main">
      <div class="container  about">
        <div class="about-section">
            <h1 className='text-center'>Welcome to Our Team</h1>
            <p>we are passionate about empowering individuals and teams with the knowledge and skills to excel in today’s fast-paced technology landscape. Whether you're a beginner eager to dive into the world of coding or a seasoned professional looking to sharpen your skills, we provide comprehensive training to help you achieve your goals.</p>
            <ul>
                <li><strong>Programming Languages:</strong> Java,Hibernate,Spring Core, Spring Boot, Microservices</li>
                <li><strong>Web Development:</strong> HTML, CSS, React, Angular,Java Script</li>
                <li><strong>Database Management:</strong> SQL, NoSQL, MongoDB, PostgreSQL.</li>
                <li><strong>Project Training</strong></li>
                <li><strong>Industry Exposure</strong></li>
            </ul>
        </div>
        <div className="team">
            <div>
                {/* <img src={pic} alt="Team Member" height={200} width={200}/> */}
                <h3>Rahul Gaba</h3>
                
            </div>
           
        </div>
    </div>
    </div>
  )
}

export default AboutUs

