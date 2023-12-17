import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherPage from "./components/pages/WeatherPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import SettingPage from "./components/pages/SettingPage";
import AboutPage from "./components/pages/AboutPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/home" element={<WeatherPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/setting" element={<SettingPage />} />
        {/* 404 Router */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
