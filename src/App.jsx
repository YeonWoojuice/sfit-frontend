import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './Pages/AuthPage'

function App() {
  return (
    <BrowserRouter>
    <AuthPage />
      {/* <Header/> */}
      {/* <SignupPage />
      {/* <AuthLayout /> */}
      {/* <Routes>
        <Route path="/" element={SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
