import homeimg from "../../assets/home-image.svg";
import airbnb from "../../assets/airbnb.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import microsoft from "../../assets/microsoft.svg";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/jobs");

  }
  return (
    <section className="home-section">
      <div className="container">
        <div className="home-wrapper">
          <div className="home-content">
            <h1>Find your dream job</h1>
            <p className="sub-heading">Search and apply for your dream job today</p>
            <button onClick={handleNavigate}>Browse jobs</button>
            <img src={homeimg} alt="home-image" />
            <p className="user-trust-paragraph">Trusted by over 200.000 users</p>
            <div className="users-logos">
              <img src={airbnb} alt="google-logo" />
              <img src={google} alt="google-logo" />
              <img src={facebook} alt="google-logo" />
              <img src={microsoft} alt="google-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;