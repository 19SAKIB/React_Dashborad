import React from 'react';
import { RiDashboard3Line } from "react-icons/ri";
import { SiFuturelearn } from "react-icons/si";
import { MdOutlineForum } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdContentCopy } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <ul>
        <li><RiDashboard3Line />  Dashboard</li>
        <li>  <SiFuturelearn /> Learn</li>
        <li> <MdOutlineForum />  Forums</li>
        <li><GiSkills />  Upskill</li>
        <li> <MdContentCopy/> Contest</li>
        <li> <MdLeaderboard/>  Leaderboard</li>
      </ul>
    </div>
  );
}

export default Sidebar;