import './App.css';
import Header from './components/header'
import { Routes, Route } from "react-router-dom";
import InitialScreen from "./pages/Initial"
import NotFoundScreen from './pages/not-found';

function App() {
  return (
    <div className='w-screen h-screen bg-bg-grey'>
      <Header />
      <Routes>
        <Route path="/" element={<InitialScreen />} />
        <Route path="/not-found" element={<NotFoundScreen />} />
      </Routes>
    </div>
  );
}

export default App;
