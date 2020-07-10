import React from 'react';
import './Logout.css';
import { RiLogoutBoxRLine } from "react-icons/ri";

const Logout = () => {
  return (
    <div className="logoutWrap">
      <button className="logoutBtn">LogOut<RiLogoutBoxRLine /></button>
    </div>
  );
};

export default Logout;