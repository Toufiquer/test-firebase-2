import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import CompoWithTitle from "./components/CompoWithTitle";
import Home from "./components/Home";
import About from "./components/About";
import Private from "./components/Private";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./components/RequireAuth";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <CompoWithTitle>
              <Home></Home>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <CompoWithTitle>
              <Home></Home>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <CompoWithTitle>
              <About></About>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="/private"
          element={
            <CompoWithTitle>
              <RequireAuth>
                <Private></Private>
              </RequireAuth>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="/logIn"
          element={
            <CompoWithTitle>
              <LogIn></LogIn>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="/signUp"
          element={
            <CompoWithTitle>
              <SignUp></SignUp>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="*"
          element={
            <CompoWithTitle>
              <NotFound></NotFound>
            </CompoWithTitle>
          }
        ></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
