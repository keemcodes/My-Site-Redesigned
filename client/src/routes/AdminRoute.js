import Header from "../components/header";
import Login from '../components/login';
import Contacts from '../components/contacts';
import Footer from '../components/footer';
import AbsoluteSides from '../components/absolute-sides';

// import Test from './components/test';
// import TestTwo from './components/test2';
// import TestThree from './components/test3';
import { InView } from 'react-intersection-observer';
import  { useContext} from 'react';
import { AuthContext } from '../Auth';


function AdminRoute() {
  const { isAuth, logout } = useContext(AuthContext);
  console.log("App auth: ", isAuth);

    return (
      <>
        <Header admin='/'/>
        <main>
          <AbsoluteSides />  
          
          <InView>
            {({ ref, inView, entry }) => (
              <>
                
                {isAuth ? (<Contacts forwardRef={ref} inView={inView} />) : (<Login forwardRef={ref} inView={inView} />)}
                {isAuth ? (
                <>
                  <div className='logout'>
                    <h3>Logged in</h3>
                    <button onClick={() => logout()}>Logout</button>
                  </div>
                </>
                ) : (<h3>Not Logged In</h3>)}
              </>
            )}
          </InView>
        </main>
        <Footer />
      </>
    );
}

export default AdminRoute;
