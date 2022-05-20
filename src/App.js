import './App.css';
import Header from './components/header'
import { Routes, Route } from "react-router-dom";
import InitialScreen from "./pages/Initial"

function App() {
  return (
    <div className='w-screen h-screen bg-bg-grey'>
      <Header />
      <Routes>
        <Route path="/" element={<InitialScreen />} />
      </Routes>
    </div>
  );
}

export default App;
