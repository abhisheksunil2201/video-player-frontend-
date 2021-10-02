import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ThemeProvider } from "./context/themeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { VideoProvider } from "./context/videosContext";
import { PlaylistProvider } from "./context/playlistContext";
import ScrollToTop from "./components/utils/ScrollTop";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <PlaylistProvider>
            <VideoProvider>
              <ThemeProvider>
                <ScrollToTop />
                <App />
              </ThemeProvider>
            </VideoProvider>
          </PlaylistProvider>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
