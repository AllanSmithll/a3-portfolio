import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMongodb
} from "react-icons/si";

function DataStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
    </Row>
  );
}

export default DataStack;
