import firstPic from "../src/assets/Horiseon.png";
import passwordGen from "../src/assets/PasswordGen.png";

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
        imgSrc={firstPic}
        footerText="Accessibility Refactor"
        imgId="firstpic"
      />
      <Card
        href="https://ahuss13.github.io/Password-Generator-Challenge/"
        imgSrc={passwordGen}
        footerText="Password Generator"
        imgId="passwordgen"
      />
    </div>
  </section>
);

export default Project;
