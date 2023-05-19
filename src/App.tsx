import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Auth from "./pages/auth";
import Chat from "./pages/chat";
import {ChatLayout} from "./components/organisms/chatLayout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <div>
      <Chat/>
    </div>

  );
}

export default App;
