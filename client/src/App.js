// import { Routes, Route, Navigate } from "react-router-dom";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
import { AuthProvider } from "./Auth";
import Main from "./routes/Main";
import LoginRoute from "./routes/LoginRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
  const Pages = () => {
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LoginRoute />} />
            <Route path="/admin" element={<AdminRoute />} />
            {/* <PrivateRoute path="/admin" element={<AdminRoute />} component={AdminRoute} /> */}
          </Routes>
        </BrowserRouter>
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