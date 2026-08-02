import { Container } from "./styles";
//import VinayakSingh from "../../assets/VinayakSingh.webp";
//import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
//import wordpress from "../../assets/wordpress.svg";
//import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
//import typescriptIcon from "../../assets/typescript-icon.svg";
//import vueIcon from "../../assets/vue-icon.svg";
import mongodb from "../../assets/mongodb.svg";
import admin from "../../assets/admin.jpg";
import aws from "../../assets/aws.svg";
//import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Vineet M, an enthusiastic Software Engineering student skilled in Full Stack web development, Cloud computing, and scalable software solutions
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I build responsive web applications, and implement robust backend services using java.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
           I'm passionate about Software development, technology and problem solving.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> B-Tech in Computer science and engineering </h4>
            <p>Presidency University, Bengaluru | Nov 2023 - Jul 2027</p>
            <p>7.56 CGPA</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>Experience:</h3><h4>Tech Co-lead</h4>
            <p>Google Developer Groups On campus | Sep 2025</p>
            <p>Bengaluru, India</p>
            <div className="experience-item">
      <h4>Mentor</h4>
      <p>GirlScript Summer of Code (GSSoC) | Sep 2025 - Dec 2025</p>
      <p>Remote</p>
    </div>

    <div className="experience-item">
      <h4>Mentor</h4>
      <p>Social Winter of Code (SWOC) | Jan 2026 - Mar 2026</p>
      <p>Remote</p>
    </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills"> 
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
             <img src={mongodb} alt="mongodb" />
            </ScrollAnimation>
            </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
            <img src={aws} alt="aws" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
      <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
      <img src={admin} alt="Vineet M" />
      </ScrollAnimation>
      </div>

    </Container>
  )
}
