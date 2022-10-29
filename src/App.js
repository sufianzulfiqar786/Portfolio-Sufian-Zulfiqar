import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
// import Home from './Pages/Extra'

function App() {
  return (
    <div >

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
