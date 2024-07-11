import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arunabh Gupta </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I hold an Integrated B.Tech in Computer Science Engineering from the College of Engineering Bhubaneswar (CEB).
            <br />
            <br />
            In addition to coding, I enjoy a variety of activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Engaging with people on social platforms
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arunabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
