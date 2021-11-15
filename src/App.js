// import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import About from './components/about';
import Projects from './components/projects';
import Employment from './components/employment';
import Contact from './components/contact';
// import Menu from './components/menu';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Menu /> */}
        <Home />
        <About />
        <Projects />
        <Employment jobnames={['CoA', 'Nu Life', 'NGG']}/>
        <Contact />
      </main>
    </>
  );
}

export default App;
