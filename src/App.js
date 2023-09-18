import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>

        
            

          <Route path="/checkout" element={<>
            <Header />
            <Checkout />
          </>}/>
          
          <Route path="/" element={<>
            <Header />
            <Home />
          </>}/>



        </Routes>

      </Router>

    </div>
  );
}

export default App;
