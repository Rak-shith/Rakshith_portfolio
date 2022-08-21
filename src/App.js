import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './sections/Home/Home';  
import About from './sections/About/About';
import Header from './sections/Header/Header';
import Contact from './sections/Contact/Contact';
import Project from './sections/Project/Project';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
