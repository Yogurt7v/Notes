import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { createContext, useState } from "react";
import { Login } from "./components/Login/Login";
import "./App.css";
import { MainLayout } from "./components/MainLayout.tsx/MainLayout";

// export const AuthContext = createContext();

function App() {

  return (
    // <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Main />
              </MainLayout>
            }
          />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    // </AuthContext.Provider>
  );
}

export default App;
