import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage";
import MainPage from "./Pages/MainPage";
import Header from "./Components/Header";
function App() {
  return (
    <BrowserRouter>
      {/* <AuthPage /> */}
      <Header />
      {/* <SignupPage /> */}
      {/* <AuthLayout /> */}
      <MainPage />
      {/* 
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes> 
      */}
    </BrowserRouter>
  );
}

export default App;
