import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Project from './components/project';

function App() {
  return (
    <div className="App"> 
         <Header/>
         <Hero/>
        <About/>
        <Experience/>
        <Project/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
