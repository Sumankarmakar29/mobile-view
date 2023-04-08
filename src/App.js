import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carosel from './components/Carosel';
// import Navbar from './components/Navbar';


function App() {

  return (
    <div>
    <Navbar/>
    <LandingPage/>
    <Carosel props='speed'/>
    <Footer/>
    </div>
  );
}

export default App;
