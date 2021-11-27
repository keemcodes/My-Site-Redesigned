// import logo from './logo.svg';
// import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./components/home";
import About from './components/about';
import Projects from './components/projects';
import Employment from './components/employment';
import Contact from './components/contact';
import { InView } from 'react-intersection-observer';
// import { useRef, useEffect } from 'react';
 
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
        {/* <Home /> */}
        <InView threshold={0.25}>
          {({ ref, inView, entry }) => (
            <section className={`home fade-in-section ${inView ? 'is-visible' : ''}`}  id='home' ref={ref}>
              {/* <div>Lalalaaa {inView.toString()}</div> */}
              <Home inView={inView} />
            </section>
          )}
        </InView>
        <InView threshold={0.25}>
          {({ ref, inView, entry }) => (
            <section id='about' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={ref}>
              <About inView={inView} />
            </section>
          )}
        </InView>
        <InView threshold={0.25}>
          {({ ref, inView, entry }) => (
            <section id='projects' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={ref}>
              <Projects inView={inView} />
            </section>
          )}
        </InView>
        <InView threshold={0.25}>
          {({ ref, inView, entry }) => (
            <section id='employment' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={ref}>
              <Employment inView={inView} jobnames={['City of Atlanta', 'Nu Life Technologies', 'Next Generation Gaming', 'Team-DRD' ]}/>
            </section>
          )}
        </InView>
        <InView threshold={0.25}>
          {({ ref, inView, entry }) => (
            <section id='contact' className={`fade-in-section ${inView ? 'is-visible' : ''}`} ref={ref}>
              <Contact inView={inView} />
            </section>
          )}
        </InView>
      </main>
    </>
  );
}

export default App;
