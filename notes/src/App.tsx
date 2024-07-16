import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { createContext, useState } from "react";
import { AddNoteForm } from "./components/AddComponent.js/AddNote.jsx";
import { SingleNote } from "./components/SingleNote/SingleNote";
import { Login } from "./components/Login/Login";
import "./App.css";
import { MainLayout } from "./components/MainLayout.tsx/MainLayout.js";

// export const AuthContext = createContext();

function App() {
  return (
    // <AuthContext.Provider value={{ auth, setAuth }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/new" element={<AddNoteForm />} />
          <Route path="/notes/:id" element={<SingleNote/>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    // </AuthContext.Provider>
  );
}

export default App;
