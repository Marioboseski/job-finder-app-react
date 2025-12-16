import Navbar from "../../components/navbar/Navbar";
import { useContext } from "react";
import { userContext } from "../../context/Context";
import profileimg from "../../assets/profile-img.svg";
import "./profile.css";

const Profile = () => {
  const { user, logoutUser } = useContext(userContext);
  return (
    <div className="profile-layout">

      <aside className="sidebar">
        <Navbar />
      </aside>
      
      <div className="profile-content">

        <div className="profile-details">
          <h2>Profile</h2>
          <div className="details-image-div">
            <img src={profileimg} alt="profile-img" />
            <div className="details">
              <p>{user?.name}</p>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="personal-info-div">

          <h3>Personal details</h3>

          <div className="personal-info">
            <p>{user?.name}</p>
            <p>{user?.email}</p>
          </div>

          <button onClick={() => logoutUser(user)} className="logout-btn">Logout</button>

        </div>

      </div>
    </div>
  );
}

export default Profile;