import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import { MainLayout } from "../MainLayout.tsx/MainLayout";

export function Main() {
  const user = sessionStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <h1>Main Component</h1>
    </>
  );
}
