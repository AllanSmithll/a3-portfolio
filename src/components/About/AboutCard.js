import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá pessoas, sou o <span className="purple">Allan Amancio </span>
            da <span className="purple"> Paraíba, Brasil.</span>
            <br /> Eu estou no penúltimo ano do curso Sistemas para Internet, no Instituto Federal da Paraíba (IFPB).
            <br />
            Atualmente, estou a procura de alguma vaga de estágio na área de Tecnologia da Informação.
            <br />
            <br />
            Abaixo, algumas atividades que gosto de fazer no meu dia a dia!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar videogames
            </li>
            <li className="about-activity">
              <ImPointRight /> Praticar esportes
            </li>
            <li className="about-activity">
              <ImPointRight /> Ler bastante
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Faça a diferença na vida de alguém"{" "}
          </p>
          <footer className="blockquote-footer">Ninguém em específico hahaha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
