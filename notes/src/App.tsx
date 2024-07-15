import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { createContext, useState } from "react";
import "./App.css";

function App() {
  const AuthContext = createContext([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route path="/" />
        <Route index element={<Main />}></Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
