import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { AuthRoute } from "./components/AuthRoute";
import { Navbar } from "./components/Navbar/Navbar";
import { NavbarBottom } from "./components/Navbar/NavbarBottom";
import { History } from "./routes/History";
import { Home } from "./routes/Home";
import { Library } from "./routes/Library";
import { LikedVideos } from "./routes/LikedVideos";
import { Login } from "./routes/Login";
import { Playlist } from "./routes/Playlist";
import { Profile } from "./routes/Profile";
import { Signup } from "./routes/Signup";
import { VideoPage } from "./routes/VideoPage";
import { WatchLater } from "./routes/WatchLater";

function App() {
  return (
    <div className="App 3xl:border-r 3xl:border-l">
      <Toaster position="bottom-left" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videopage/:videoID" element={<VideoPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <AuthRoute path="/library" element={<Library />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <AuthRoute path="/playlist/:playlistId" element={<Playlist />} />
        <AuthRoute path="/profile" element={<Profile />} />
      </Routes>
      <NavbarBottom />
    </div>
  );
}

export default App;
