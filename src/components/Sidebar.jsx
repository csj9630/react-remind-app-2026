import { NavLink } from "react-router";

function Sidebar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <NavLink to="/">Home | </NavLink>
        <NavLink to="/chat">Chat | </NavLink>
        <NavLink to="/documents">Documents | </NavLink>
        <NavLink to="/settings">Settings | </NavLink>
        <NavLink to="/practice">Practice </NavLink>
      </nav>
    </>
  );
}

export default Sidebar;
