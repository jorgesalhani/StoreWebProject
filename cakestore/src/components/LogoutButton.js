import React from "react";

const LogoutButton = (props) => {
    // handle click event of logout button
    const handleLogout = () => {
      props.history.push("/login");
    };
  return <input type="button" onClick={handleLogout} value="Logout" />;
};

export default LogoutButton;
