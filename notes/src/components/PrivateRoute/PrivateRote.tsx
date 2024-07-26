import { NavLink } from "react-router-dom";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const localUser = sessionStorage.getItem("user");

  if (!localUser) {
    return (
      <div>
        <h2>Not Authorized</h2>
        <NavLink to="/login"></NavLink>
      </div>
    );
  } else {
    return children;
  }
}
