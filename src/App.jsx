import Home from "./pages/home/Home";
import Jobs from "./pages/jobs/Jobs";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import Profile from "./pages/profile/Profile";
import LoginForm from "./components/login-form/LoginForm";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;