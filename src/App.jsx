import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Industry from "./components/Industry";
import VideoPage from "./components/VideoPage";
import AuthPage from "./pages/AuthPage";

const App = () => (
  <BrowserRouter>
    <div className="font-sans bg-gray-50">
      <Navbar />
      <Routes>
        {/* Home Page (VideoPage + Industry) */}
        <Route
          path="/"
          element={
            <>
              <VideoPage />
              <Industry />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
