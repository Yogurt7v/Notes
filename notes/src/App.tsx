import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { TipTap } from "./components/TipTapComponent/TipTap";
import { SingleNote } from "./components/SingleNote/SingleNote";
import { Login } from "./components/Login/Login";
import "./App.css";
import { MainLayout } from "./components/MainLayout.tsx/MainLayout.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/new" element={<TipTap />} />
          <Route path="/notes/:id" element={<SingleNote />} />
          <Route path="/edit/:id" element={<TipTap />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
