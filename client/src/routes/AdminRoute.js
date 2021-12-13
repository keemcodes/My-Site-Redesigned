import Header from "../components/header";
import Home from '../components/home';
import Login from '../components/login';
import Footer from '../components/footer';
import AbsoluteSides from '../components/absolute-sides';
// import Test from './components/test';
// import TestTwo from './components/test2';
// import TestThree from './components/test3';
import { InView } from 'react-intersection-observer';
import  {useState, useContext} from 'react';
import { AuthContext } from '../Auth';


function AdminRoute() {
  const { isAuth, logout } = useContext(AuthContext);
  console.log("App auth: ", isAuth);
  const [secret, setSecret] = useState("");

  const getSecret = async () => {
    const secretResponse = await fetch("/api/auth/secrets");
    console.log(secretResponse.data);
    setSecret(secretResponse.data);
  };
    return (
      <>
        <Header />
        <main>
          <AbsoluteSides />  
          <InView>
            {({ ref, inView, entry }) => (
              <>
                <Home forwardRef={ref} inView={inView} />
                {isAuth ? 
                (<>
                
                  <div>This Works Yo</div>
                </>) : 
                
                (<>
                  <div>This Domt Work Yo</div>
                </>)}
              </>
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

export default AdminRoute;
