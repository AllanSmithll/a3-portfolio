import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import talk from "../../Assets/Projects/4talk.png";
import theLister from "../../Assets/Projects/theLister.png";
import cronosStar from "../../Assets/Projects/cronosStar.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>
          Recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos que tenho trabalhado recentemente
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theLister}
              isBlog={false}
              title="The Lister"
              description="O projeto Lister é um aplicativo Web simples projetado para ajudá-lo a organizar tarefas. O projeto foi criado com o objetivo de fornecer uma interface intuitiva para adicionar, gerenciar e marcar tarefas como concluídas. O aplicativo é desenvolvido em React e utiliza componentes funcionais para criar uma experiência interativa e amigável, trabalhando também com Armazenamento Local (Web Storage) das tarefas, tanto as tarefas ativas quanto as concluídas."
              ghLink="https://github.com/AllanSmithll/the-lister"
              demoLink="https://allansmithll.github.io/the-lister/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cronosStar}
              isBlog={false}
              title="Cronos Star"
              description="Cronos Star é um aplicativo de relógio desenvolvido em HTML, CSS e JavaScript. O aplicativo exibe a hora atual de alguns países no mundo e possui um design responsivo que se adapta a diferentes tamanhos de tela."
              ghLink="https://github.com/AllanSmithll/cronos-star"
              demoLink="https://allansmithll.github.io/cronos-star/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talk}
              isBlog={false}
              title="4TALK"
              description="4TALK é um sistema de bate-papo entre pessoas e grupos, permitindo uma comunicação fácil e eficiente. Com o 4TALK, você pode trocar mensagens individuais, participar de grupos de bate-papo e gerenciar suas mensagens enviadas e recebidas."
              ghLink="https://github.com/ImMarcio/System-4TALK"
              demoLink="https://github.com/ImMarcio/System-4TALK/blob/main/4TALK.jar"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
