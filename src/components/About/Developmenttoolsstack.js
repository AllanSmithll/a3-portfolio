import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiEclipse
} from 'react-icons/di';
import {
  SiPycharm,
  SiWebstorm,
  SiIntellijidea,
  SiGoland,
  SiVisualstudiocode,
  SiVisualstudio,
  SiFigma
} from "react-icons/si";

function Developmenttoolsstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiPycharm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiWebstorm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiIntellijidea />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGoland />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiEclipse />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFigma />
        </Col>
    </Row>
  );
}

export default Developmenttoolsstack;