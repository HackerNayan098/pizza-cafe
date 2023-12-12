import { Link } from "react-router-dom";
import BgBanner from "../assets/pizza.jpeg";
import "../styles/home.scss";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${BgBanner})`,
      }}
    >
      <div className="home-content">
        <h1>Pizza For Your Soul</h1>
        <p>It's about good pizza and fresh ingredients. </p>
        <button>
          <Link to="/menu">Order Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
