import horiseonImg from "../src/assets/Horiseon.png";
import passwordGen from "../src/assets/PasswordGen.png";
import textEditor from "../src/assets/TextEditor.png";
import timedQuiz from "../src/assets/TimedQuiz.png";
import dayScheduler from "../src/assets/DayScheduler.png";

const Card = ({ href, imgSrc, footerText, imgId }) => (
  <div className="card">
    <a href={href}>
      <img id={imgId} src={imgSrc} alt={footerText} />
      <footer>{footerText}</footer>
    </a>
  </div>
);

const Project = () => (
  <section id="work">
    <h2>Work</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
      expedita doloremque atque. Obcaecati sapiente, iure, suscipit fuga
      excepturi dolore et unde perspiciatis voluptatum quo voluptatem veritatis!
      Voluptate eum quos expedita.
    </p>
    <div className="work">
      <Card
        href="https://ahuss13.github.io/Horiseon-Challenge/"
        imgSrc={horiseonImg}
        footerText="Accessibility Refactor"
        imgId="horiseon"
      />
      <Card
        href="https://ahuss13.github.io/Password-Generator-Challenge/"
        imgSrc={passwordGen}
        footerText="Password Generator"
        imgId="passwordgen"
      />
      <Card
        href="https://pwa-text-editor-m2rz.onrender.com/"
        imgSrc={textEditor}
        footerText="Text Editor"
        imgId="texteditor"
      />
      <Card
        href="https://ahuss13.github.io/JavaScript-Quiz-Challenge/"
        imgSrc={timedQuiz}
        footerText="Timed Quiz"
        imgId="timedquiz"
      />
            <Card
        href="https://ahuss13.github.io/Day-Scheduler-Challenge/"
        imgSrc={dayScheduler}
        footerText="Day Scheduler"
        imgId="dayscheduler"
      />
    </div>
  </section>
);

export default Project;
