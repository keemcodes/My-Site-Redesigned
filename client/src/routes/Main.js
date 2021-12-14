import Header from "../components/header";
import Home from "../components/home";
import About from '../components/about';
import Projects from '../components/projects';
import Employment from '../components/employment';
import Contact from '../components/contact';
import Footer from '../components/footer';
import AbsoluteSides from '../components/absolute-sides';
// import Test from './components/test';
// import TestTwo from './components/test2';
// import TestThree from './components/test3';
import { InView } from 'react-intersection-observer';

function Main() {

    return (
      <>
        <Header />
        <main>
          <AbsoluteSides />  
          <InView>
            {({ ref, inView, entry }) => (
                <Home forwardRef={ref} inView={inView} />
            )}
          </InView>
          <InView>
            {({ ref, inView, entry }) => (
                <About forwardRef={ref} inView={inView}/>
            )}
          </InView>
          <InView>
            {({ ref, inView, entry }) => (
                <Projects forwardRef={ref} inView={inView} />
            )}
          </InView>
          <InView>
            {({ ref, inView, entry }) => (
                <Employment forwardRef={ref} inView={inView} jobnames={['City of Atlanta', 'Nu Life Technologies', 'Next Generation Gaming', 'Team-DRD' ]}/>
            )}
          </InView>
          <InView>
            {({ ref, inView, entry }) => (
                <Contact forwardRef={ref} inView={inView} />
            )}
          </InView>
        </main>
        <Footer />
      </>
    );
}

export default Main;
