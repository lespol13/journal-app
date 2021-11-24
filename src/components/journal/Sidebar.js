import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import JournalEntries from "./JournalEntries";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(startLogout());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon" />
          <span> NavBar</span>
        </h3>

        <button onClick={handleLogin} className="btn">
          Logout
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x">
          <p className="mt-5">New entry</p>
        </i>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default SideBar;
