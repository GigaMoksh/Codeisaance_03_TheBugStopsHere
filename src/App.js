import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { MoralisProvider } from "react-moralis";
import Home from "./components/home/Home";
import UserDashboard from "./components/user/UserDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Admin from "./components/admin/Admin";
import UploadDoc from "./components/user/UploadDoc";
import Verify from "./components/Verify";
const App = () => {
  return (
    <MoralisProvider
      serverUrl="https://9srnar891yfo.usemoralis.com:2053/server"
      appId="BJ2TKeyH7s7ywXf8ZGXwWxAhZkF9vV7mnlr5FW1o"
    >
      <AppProvider>
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
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/upload-doc" element={<UploadDoc />} />
              <Route exact path="verify" element={<Verify />} />
            </Routes>
          </div>
        </Router>
      </AppProvider>
    </MoralisProvider>
  );
};

export default App