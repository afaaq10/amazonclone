import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import Checkout from './components/Checkout';
function App() {
  return (


    <Routes>
      <Route path="/amazonclone" element={<div className="app"> <Header />
        <Home />
      </div>
      } />

      <Route path='/amazonclone/checkout' element={
        <>
          <Header />
          <Checkout />
        </>
      } />

    </Routes>



  );
}

export default App;
