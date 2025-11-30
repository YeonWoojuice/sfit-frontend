import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import Layout from "./layouts/layout";
import AboutPage from "./pages/AboutPage";
import MyPage from "./pages/Mypage";
import CoachPage from "./pages/CoachPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="my" element={<MyPage />} />
          <Route path="coach" element={<CoachPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
