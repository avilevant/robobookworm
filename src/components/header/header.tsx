import "./header.css";
import worm from "../../img/bookWorm.png";

const Header = () => (
  <div className="head">
    <h1>RoboBookWorm</h1>
    <img className="worm" src={worm} alt="bookworm" />
  </div>
);

export default Header;
