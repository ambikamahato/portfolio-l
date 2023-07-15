import React from "react";
// import images from "./images/ambika.jpg";
const About = () => {
    return(
        <div className="about">
            <h2>About Us</h2>
            <img src={require("./images/ambika.jpg")} alt="Ambika's Pic"/>
            <p>My name is Ambika Prasad Mahato, and I am a passionate software engineer. I have always been intrigued by technology and its ability to solve complex problems and improve people's lives. From a young age, I found myself drawn to computers and programming, and that interest has only grown stronger over the years.<br />
            I am dedicated to continuously learning and honing my skills in software engineering. I have acquired a solid foundation in various programming languages, including JavaScript, and Java. I enjoy exploring different frameworks and libraries that enable me to build innovative and efficient solutions.<br />
            I am particularly interested in web development and have experience in building responsive and user-friendly web applications. I am familiar with front-end technologies such as HTML, CSS, and JavaScript, as well as popular frameworks like React. I am also experienced in back-end development, utilizing databases and server-side technologies to create robust and scalable systems.
            </p>
        </div>
    )
}  

export default About;