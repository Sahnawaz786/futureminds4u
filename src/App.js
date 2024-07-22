import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Body/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
