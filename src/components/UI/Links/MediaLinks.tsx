import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/new-logo-x.png";
import "./style.css";

const MediaLinks = () => {
  return (
    <div className="media_links">
      <a
        href="http://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: 45 }}
      >
        <img src={facebook} alt="facebook" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: 45 }}
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a

        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="linkImg" src={twitter} alt="twitter" style={{ width: 32, height: 32 }} />
      </a>
    </div>
  );
};

export default MediaLinks;
