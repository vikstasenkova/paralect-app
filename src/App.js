import './App.css';
import Header from './components/header'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='w-screen h-screen bg-bg-grey'>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
