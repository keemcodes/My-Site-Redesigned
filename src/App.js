// import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import About from './components/about';
import Projects from './components/projects';
import Employment from './components/employment';
import Contact from './components/contact';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Employment 
          jobnames={['CoA', 'Nu Life', 'NGG']}
        />
        <Contact />
      </main>
    </>
  );
}

export default App;
