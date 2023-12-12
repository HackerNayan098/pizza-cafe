import "./styles/footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="socialMedia">
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiFillLinkedin />
      </div>
      <p> &copy; {year} Nayan'spizza.com</p>
    </div>
  );
};

export default Footer;
