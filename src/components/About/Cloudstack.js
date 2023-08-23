import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAmazonaws
} from "react-icons/si";

function Cloudstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
    </Row>
  );
}

export default Cloudstack;