import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import telegram from "../../images/telegram.png";
import './style.css'

const MediaLinks = () => {
  return (
    <div className="media_links">
      <a
        href="http://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{marginRight: 45}}
        >
        <img src={facebook} alt="facebook" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{marginRight: 45}}
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a
        href="https://web.telegram.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={telegram} alt="telegram" />
      </a>
    </div>
  );
};

export default MediaLinks;
