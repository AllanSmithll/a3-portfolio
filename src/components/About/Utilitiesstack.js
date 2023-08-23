import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiDotnet,
  SiBootstrap
} from "react-icons/si";

function Utilitiesstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
    </Row>
  );
}

export default Utilitiesstack;