import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME ME <span className="purple"> APRESENTAR </span>
            </h1>
            <p className="home-about-body">
              Sou alguém apaixonado pela área de Engenharia de Software.
              <br />
              <br />Eu sou fluente em várias linguagens de programação, como
              <i>
                <b className="purple"> Python, Javascript, TypeScript, Java, Golang and C#. </b>
              </i>
              <br />
              <br />
              Minha área de interesse, como dito anteriormente, é a de &nbsp;
              <i>
                <b className="purple">Engenharia de Software. </b> Gosto das partes de {" "}
                <b className="purple"> desenvolvimento de softwares, análise de sistemas e requisitos, engenharia de requisitos, banco de dados e pesquisar 
                sobre coisas relacionadas à área.
                </b>
              </i>
              <br />
              <br />
              Constantemente, eu também aplico minha paixão por desenvolver produtos Web com <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas e Frameworks Modernos de várias linguagens de programação,
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js, Angular, Spring Boot, Django e .NET.</b>
              </i>
              <br />
              <br />
              Além disso, não posso deixar de ressaltar que uso as linguagens <i>
                <b className="purple">Java e C#
                </b>
                </ i>
                &nbsp; para fazer aplicações bem mais robustas, junto de um bom framework, como o próprio 
                 <i>
                <b className="purple">                Angular e o Spring Boot.
                </b>
                </ i> 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
              Fique à vontade para <span className="purple"> me seguir ou conectar </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AllanSmithll"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AllanSmithll2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/allan-alves-amancio-211632197/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/allan_smith_pb/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
