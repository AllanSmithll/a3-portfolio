import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import theLister from "../../Assets/Projects/theLister.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
