import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import { UserContextProvider } from "./context/UserContextProvider";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden font-custom bg-secondary">
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout />}>
               <Route path="/signup" element={<SignUp />} />
               <Route path="/login" element={<Login />} />
               <Route path="/home" element={<PrivateRoute element={Home} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
