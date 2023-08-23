import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Datastack from "./Datastack";
import Cloudstack from "./Cloudstack";
import Utilitiesstack from "./Utilitiesstack";
import Devopsstack from "./Devopsstack";
import Developmenttoolsstack from "./Developmenttoolsstack";
import Othersstack from "./Othersstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Saiba quem <strong className="purple">EU SOU</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Applications</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Data</strong> tools
        </h1>
        <Datastack />

        <h1 className="project-heading">
          <strong className="purple">Cloud</strong> computing
        </h1>
        <Cloudstack />

        <h1 className="project-heading">
          <strong className="purple">Utilities</strong>
        </h1>
        <Utilitiesstack />

        <h1 className="project-heading">
          <strong className="purple">DevOps</strong>
        </h1>
        <Devopsstack />

        <h1 className="project-heading">
          <strong className="purple">Development Tools</strong>
        </h1>
        <Developmenttoolsstack />

        <h1 className="project-heading">
          <strong className="purple">Others</strong>
        </h1>
        <Othersstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
