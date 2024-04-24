import React from 'react'
import './About.css'
import aboutus1 from '../Assets/aboutus1.avif'
import aboutus2 from '../Assets/aboutus2.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="upper">
            <img src={aboutus1} alt="" />
            <p>As the field of software engineering involves the design, development, and maintenance of computer systems and networks, covering hardware and software aspects, the demand for a well-rounded and highly skilled person has increased and hence a learning roadmap is designed for engineering students through a holistic approach to skill development. The proposed learning roadmap is structured into three main parts: Beginner, Intermediate, and Advanced, in which the student can choose their way to develop the skills that would help them understand the practical applications, fostering problem-solving abilities, and promoting a deep understanding of different concepts. This platform offers a comprehensive set of tools, resources, and technologies to address a range of challenges, allowing users to access everything they need in one place for efficient problem-solving.</p>
        </div>
        <hr />
        <div className="lower">
            {/* <p> This not only provides resources in one place but also saves an ample amount of time to find out the steps to achieve a particular skill. Therefore, a Learning Roadmap is made for the students to explore and understand various concepts, and provide step-by-step learning.</p> */}
            <ul>
                <li><b>Comprehensive Learning Roadmap:</b> A structured learning path is proposed for engineering students in engineering field, covering beginner, intermediate, and advanced levels.
                </li>
                <li><b>Holistic Skill Development:</b> The roadmap emphasizes practical application, problem-solving, and deep understanding of concepts, offering a range of tools and resources in one accessible platform.
                 </li>
                <li><b>Efficiency and Time-Saving:</b> By centralizing resources and providing step-by-step guidance, the roadmap streamlines the learning process, saving students time in acquiring specific skills.</li>
            </ul>
            <img src={aboutus2} alt="" />
        </div>
    </div>
  )
}

export default About
