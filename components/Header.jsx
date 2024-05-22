import SelfPic from "../src/assets/SelfPic.jpg"

const Header = () => (
  <header>
    <h1>Adam Huss</h1>
      <img className="avatar" src={SelfPic} alt=""/>
    <p>Web Developer</p>
  </header>
);

export default Header;
