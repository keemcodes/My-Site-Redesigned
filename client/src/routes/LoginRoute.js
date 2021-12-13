import Header from "../components/header";
import Home from '../components/home';
import Login from '../components/login';
import Footer from '../components/footer';
import AbsoluteSides from '../components/absolute-sides';
// import Test from './components/test';
// import TestTwo from './components/test2';
// import TestThree from './components/test3';
import { InView } from 'react-intersection-observer';

function LoginRoute() {

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
                <Login forwardRef={ref} inView={inView} />
            )}
          </InView>
        </main>
        <Footer />
      </>
    );
}

export default LoginRoute;
