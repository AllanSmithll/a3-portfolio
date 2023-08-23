import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiGit,
    DiGithub,
    DiDocker
} from "react-icons/di";

function Devopsstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDocker />
        </Col>
    </Row>
  );
}

export default Devopsstack;