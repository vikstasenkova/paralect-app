import './App.css';
import Header from './components/header'
import { Routes, Route } from "react-router-dom";
import InitialScreen from "./pages/Initial"
import NotFoundScreen from './pages/not-found';
import MainScreen from './pages/main';

function App() {
  return (

    <div className='w-screen h-screen bg-bg-grey'>
      <Header />
      <Routes>
        <Route path="/" element={<InitialScreen />} />
        <Route path="/not-found" element={<NotFoundScreen />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </div>
  );
}

export default App;
