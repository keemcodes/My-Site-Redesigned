// import { Routes, Route, Navigate } from "react-router-dom";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { AuthProvider } from "./Auth";
import Main from "./routes/Main";
import LoginRoute from "./routes/LoginRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
  const Pages = () => {
    return(
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/admin" element={<AdminRoute />} />
          {/* <PrivateRoute path="/admin" element={<AdminRoute />} component={AdminRoute} /> */}
        </Routes>
      </>
    );
  }
  return (
    <>
    <Router>
      <AuthProvider>
        <Pages />
      </AuthProvider>
    </Router>
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