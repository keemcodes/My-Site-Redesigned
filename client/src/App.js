import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { AuthProvider, AuthContext } from "./Auth";
import Main from "./routes/Main";
import LoginRoute from "./routes/LoginRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
  // const { isAuth, setIsAuth } = useContext(AuthContext);
  // console.log("App auth: ", isAuth);
  // const PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={props =>
  //       isAuth ? <Component {...props} /> : <Navigate to="/login" />
  //     }
  //   />
  // );
  const Pages = () => {
    return(
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginRoute />} />
          {/* <PrivateRoute path="/admin" element={<AdminRoute />} component={AdminRoute} /> */}
        </Routes>
      </>
    );
  }
  return (
    <>
    <AuthProvider>

      <Pages />
    </AuthProvider>
    </>
  );
}

// export default () => {
//   return (
//     <AuthProvider>
//       <App /> 
//     </AuthProvider>
//   );
// };

export default App;