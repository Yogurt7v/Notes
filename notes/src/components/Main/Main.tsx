import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

export function Main() {
  const user = sessionStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
    
      navigate("/login");
    }
  }, [user]);

    return (
      <div className={styles.container}>
        <h3>Main Page</h3>
        <h3>Main Page</h3>
        <h3>Main Page</h3>
        <h3>Main Page</h3>
        <h3>Main Page</h3>
        <h3>Main Page</h3>
        <h3>Main Page</h3>
      </div>
    );
}
