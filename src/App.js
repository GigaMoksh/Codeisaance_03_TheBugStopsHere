import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { MoralisProvider } from "react-moralis";
import Home from "./components/home/Home";
import UserDashboard from "./components/user/UserDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
const App = () => {
  return (
    <AppProvider>
      <MoralisProvider>
        <Router>
          <div>
            <Header />
            {/* <Home /> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/userDashboard" element={<UserDashboard />} />
              <Route exact path="/login" element={<h1>vaibhav</h1>} />
              <Route exact path="/recovery-password" element={<h1>Login</h1>} />
              <Route path="*" element={<h1>404, Not Found!</h1>} />
            </Routes>
          </div>
        </Router>
      </MoralisProvider>
    </AppProvider>
  );
};

export default App;
