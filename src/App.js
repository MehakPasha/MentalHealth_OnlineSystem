import './App.css';
import {Route, Routes} from 'react-router-dom';
import LoginPage from './Components/LoginSignup/Login';
import SignupPage from './Components/LoginSignup/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
