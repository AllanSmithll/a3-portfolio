import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiLinux,
    DiWindows
} from 'react-icons/di';

function Othersstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiWindows />
        </Col>
    </Row>
  );
}

export default Othersstack;