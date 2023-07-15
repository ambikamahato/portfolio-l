import React from "react";
import Navbar from "./Components/navbar";
import About from "./Components/About" ;
import Section from "./Components/Sections";
import Footer  from "./Components/Footer";

import { getValue } from "@testing-library/user-event/dist/utils";

let SectionData = [
  {tittle: "Skills", des: "As a recent graduate with a Diploma completed in 2018 and a B.Tech degree completed in 2021, I am now transitioning into the IT sector and would like to highlight my skills and abilities in my resume.Web Development: Skilled in front-end web development using HTML, CSS, and JavaScript. Familiar with popular frameworks such as React or Angular, enabling the creation of dynamic and responsive web applications.Problem-Solving: Strong analytical and problem-solving skills, with the ability to identify and resolve issues efficiently. Capable of understanding complex problems, breaking them down into smaller manageable tasks, and applying logical thinking to find effective solutions.Ability to quickly grasp new concepts and adapt to changing project requirements or technologies. Open to learning and incorporating new tools and techniques to enhance productivity and project outcomes.Meticulous and detail-oriented, ensuring accuracy and quality in all aspects of work. Capable of thoroughly testing and debugging code to deliver reliable and error-free software solutions." }, 
  {tittle: "Educations", des: "s a seasoned Full Stack Developer, I have an expansive portfolio of diverse projects spanning various sectors. I've been instrumental in developing a number of successful e-commerce applications, employing technologies like MERN Stack, Python Django, and Ruby on Rails to deliver seamless, user-friendly experiences. At Microsoft, I made significant contributions to the evolution of Microsoft Teams, enhancing its functionality and user experience, and hence, facilitating efficient remote collaboration for millions of users globally. This project required deep proficiency in a range of programming languages and a keen understanding of the needs of a diverse user base. Additionally, I developed an innovative software solution as an alternative to Google Meets, demonstrating my ability to craft comparable tech products from scratch while adhering to top industry standards. This project exhibited my skills in ideation, design, and full-cycle development, as well as my understanding of the intricacies of video conferencing software. Beyond development, I've provided strategic tech guidance to startups, helping to establish their tech teams and laying down a robust foundation for their future growth. This role required not just technical expertise, but also leadership, communication skills, and a deep understanding of the tech industry. Overall, my project experiences demonstrate a solid mix of technical prowess, creativity, leadership, and a strong drive to deliver high-quality software solutions."},
  {tittle: "Projects" , des: "As a seasoned Full Stack Developer, I have an expansive portfolio of diverse projects spanning various sectors. I've been instrumental in developing a number of successful e-commerce applications, employing technologies like MERN Stack, Python Django, and Ruby on Rails to deliver seamless, user-friendly experiences. At Microsoft, I made significant contributions to the evolution of Microsoft Teams, enhancing its functionality and user experience, and hence, facilitating efficient remote collaboration for millions of users globally. This project required deep proficiency in a range of programming languages and a keen understanding of the needs of a diverse user base. Additionally, I developed an innovative software solution as an alternative to Google Meets, demonstrating my ability to craft comparable tech products from scratch while adhering to top industry standards. This project exhibited my skills in ideation, design, and full-cycle development, as well as my understanding of the intricacies of video conferencing software. Beyond development, I've provided strategic tech guidance to startups, helping to establish their tech teams and laying down a robust foundation for their future growth. This role required not just technical expertise, but also leadership, communication skills, and a deep understanding of the tech industry. Overall, my project experiences demonstrate a solid mix of technical prowess, creativity, leadership, and a strong drive to deliver high-quality software solutions."}
]


const App = () => {
  return (
    <div>
      <Navbar/>
      <About /> 
      
    {
      SectionData.map((value,index) => (
        <Section 
        tittle={value.tittle}
        des={value.des}
         />
      ))
    }
    <Footer />

    {/* One way */}
      {/* <Section
      tittle="Skills" 
      des="An accomplished Full Stack Developer and seasoned instructor with a B. Tech in Computer Science from SRM University. With over 5 years of experience at tech giants like Amazon and Microsoft, my portfolio includes projects across sectors such as edtech, e-commerce, and collaborative software like Teams. I've excelled in leadership roles, managing multiple teams and projects, and demonstrated my proficiency in AI and Machine Learning through professional training. Beyond practical work, I've enriched the tech community by teaching over 10,000 students, imparting knowledge and nurturing future talent. My strong foundation in Data Structures and Algorithms aids in effective problem-solving and crafting efficient solutions. Adept at working with agile methodologies, version control systems, and test-driven development, I have consistently delivered high-quality software while meeting strict deadlines. This blend of experience, technical skills, leadership, and teaching represents a unique combination, making me well-equipped to tackle complex challenges and drive innovation in any tech-driven role."
      />
      <Section 
      tittle="Educations"
      des = "As a seasoned Full Stack Developer, I have an expansive portfolio of diverse projects spanning various sectors. I've been instrumental in developing a number of successful e-commerce applications, employing technologies like MERN Stack, Python Django, and Ruby on Rails to deliver seamless, user-friendly experiences. At Microsoft, I made significant contributions to the evolution of Microsoft Teams, enhancing its functionality and user experience, and hence, facilitating efficient remote collaboration for millions of users globally. This project required deep proficiency in a range of programming languages and a keen understanding of the needs of a diverse user base. Additionally, I developed an innovative software solution as an alternative to Google Meets, demonstrating my ability to craft comparable tech products from scratch while adhering to top industry standards. This project exhibited my skills in ideation, design, and full-cycle development, as well as my understanding of the intricacies of video conferencing software. Beyond development, I've provided strategic tech guidance to startups, helping to establish their tech teams and laying down a robust foundation for their future growth. This role required not just technical expertise, but also leadership, communication skills, and a deep understanding of the tech industry. Overall, my project experiences demonstrate a solid mix of technical prowess, creativity, leadership, and a strong drive to deliver high-quality software solutions."
      />
      <Section
      tittle="Projects"
      des="As a seasoned Full Stack Developer, I have an expansive portfolio of diverse projects spanning various sectors. I've been instrumental in developing a number of successful e-commerce applications, employing technologies like MERN Stack, Python Django, and Ruby on Rails to deliver seamless, user-friendly experiences. At Microsoft, I made significant contributions to the evolution of Microsoft Teams, enhancing its functionality and user experience, and hence, facilitating efficient remote collaboration for millions of users globally. This project required deep proficiency in a range of programming languages and a keen understanding of the needs of a diverse user base. Additionally, I developed an innovative software solution as an alternative to Google Meets, demonstrating my ability to craft comparable tech products from scratch while adhering to top industry standards. This project exhibited my skills in ideation, design, and full-cycle development, as well as my understanding of the intricacies of video conferencing software. Beyond development, I've provided strategic tech guidance to startups, helping to establish their tech teams and laying down a robust foundation for their future growth. This role required not just technical expertise, but also leadership, communication skills, and a deep understanding of the tech industry. Overall, my project experiences demonstrate a solid mix of technical prowess, creativity, leadership, and a strong drive to deliver high-quality software solutions."
      /> */}
    </div>
  )
}

export default App;
