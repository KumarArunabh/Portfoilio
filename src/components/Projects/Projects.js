import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Heart Disease Prediction"
              description=" Heart Disease Prediction Project Objective: Developed a machine learning model to predict the likelihood
              of heart disease in patients. Tools Used: Python, NumPy, pandas, Matplotlib, StandardScaler Data Preprocessing: Handled
              missing values and encoded categorical variables. Scaled features using StandardScaler. Exploratory Data Analysis: Visualized
              data distributions and correlations. Model Building: Split data into training and testing sets. Trained Logistic Regression
              model. Evaluated performance with accuracy, confusion matrix, and classification report. Model Tuning: Optimized
              hyperparameters using GridSearchCV. Applied cross-validation to ensure model robustness.(October ’22)"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Auto-Reply AI Chatbot"
              description="Developed and deployed an AI-powered chatbot capable of generating accurate and
              real-time responses to user queries. Utilized advanced machine learning algorithms and natural language processing (NLP)
              techniques to enhance the chatbot’s understanding and interaction. Implemented the system using Python and JavaScript,
              ensuring seamless integration and efficient performance. Leveraged libraries and frameworks such as TensorFlow, PyTorch, and
              NLTK to build, train, and optimize the chatbot’s capabilities. Conducted extensive testing and optimization to ensure high
              reliability and user satisfaction. ( May ’21)"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Jarvis AI"
              description=": Engineered a cutting-edge virtual assistant named Jarvis using Python. Implemented advanced functionalities
              including voice recognition, natural language processing (NLP), and task automation. Utilized libraries such as
              SpeechRecognition and pyttsx3 for efficient voice input and output management. Integrated multiple APIs to enable
              comprehensive features such as real-time web scraping, automated email dispatch, and effective schedule management.
              Conducted rigorous testing and optimization to ensure high performance, reliability, and user satisfaction. (March ’23)"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Drag-n-drop machine learning environment"
              description="Created an intuitive, Scratch-like tool for building machine learning
              pipelines with integrated tutorials for each concept. Leveraged Python and JavaScript to develop a user-friendly interface,
              enhancing accessibility and understanding of machine learning principles. (September ’22)
"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Productivity-Boosting Task Scheduler"
              description=" Implemented an Automated Task Scheduler using Python, Flask for the backend,
              and React.js for the frontend, streamlining task management for users. (August ’22)"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
