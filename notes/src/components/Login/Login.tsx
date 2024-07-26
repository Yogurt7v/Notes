import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationTitle } from "../Inputs/AuthenticationTitle";

export function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (): void => {
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  return (
    <AuthenticationTitle
      user={user}
      setUser={setUser}
      onSubmit={() => handleChange()}
    />
  );
}
