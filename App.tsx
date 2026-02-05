import React from "react";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import MentorsPage from "./pages/MentorsPage";
import BootcampPage from "./pages/BootcampPage";
import VisualCommunicationPage from "./pages/courses/VisualCommunicationPage";
import UiUxPage from "./pages/courses/UiUxPage";
import AnimationVfxPage from "./pages/courses/AnimationVfxPage";
import VideoEditingPage from "./pages/courses/VideoEditingPage";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route
            path="courses/visual-communication"
            element={<VisualCommunicationPage />}
          />
          <Route path="courses/ui-ux-design" element={<UiUxPage />} />
          <Route path="courses/animation-vfx" element={<AnimationVfxPage />} />
          <Route path="courses/video-editing" element={<VideoEditingPage />} />
          <Route path="mentors" element={<MentorsPage />} />
          <Route path="bootcamp" element={<BootcampPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
