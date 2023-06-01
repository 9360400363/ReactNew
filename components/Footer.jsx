// Named import
import { Title } from "./Header";
import linkedin from "../icons/linkedin.svg";
import twitter from "../icons/twitter.svg";

const Footer = () => {
  return (
    <div className="foot">
      <span>{<Title />}</span>
      <h4>
        <i className="fa fa-copyright"></i>
      </h4>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Footer;
