import './App.css';
import Header from './components/header'
import { Routes, Route } from "react-router-dom";
import InitialScreen from "./pages/Initial"
import NotFoundScreen from './pages/not-found';
import MainScreen from './pages/main';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {User} from './utils/context/index'



function App() {
  let navigate = useNavigate();
  const {userData } = useContext(User)

  function PrivateRoute({ children }) {
    
    return userData ? children : navigate("/");
  }
  return (

    <div className='w-screen h-screen bg-bg-grey'>
      <Header />
      <Routes>
        <Route path="/" element={<InitialScreen />} />
        <Route path="/not-found" element={<NotFoundScreen />} />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <MainScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
