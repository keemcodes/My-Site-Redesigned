// import logo from './logo.svg';
// import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import About from './components/about';
import Projects from './components/projects';
import Employment from './components/employment';
import Contact from './components/contact';
// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import Menu from './components/menu';

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Header />
//         <main>
//           {/* <Menu /> */}
//           <Home />
//           <About />
//           <Projects />
//           <Employment jobnames={['CoA', 'Nu Life', 'NGG']}/>
//           <Contact />
//         </main>
//       </>
//     );
//   }
// }
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
