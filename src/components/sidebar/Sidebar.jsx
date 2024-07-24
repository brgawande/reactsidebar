import React from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { SiSpeedypage } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";

const Sidebar = ({ sidebarActive }) => {
  return (
    <div className={`${sidebarActive ? "pl-6" : "pl-2"} h-[100%] py-4`}>
      <div>
        <div className="logo">
          <h1 className="text-2xl text-green-600 font-bold text-left">
            {sidebarActive ? (
              "EverGreen"
            ) : (
              <IoLogoBitcoin className="text-4xl" />
            )}
          </h1>
        </div>
        <div className="flex flex-col gap-5 py-10">
          {sidebarActive ? (
            <div className="linksss flex items-center gap-2">
              <MdDashboard />
              <h2 className="font-semibold">Dashboard</h2>
            </div>
          ) : (
            <MdDashboard className="text-2xl" />
          )}
          {sidebarActive ? (
            <div className="linksss flex items-center gap-2">
              <SiMoneygram />
              <h2 className="font-semibold">Transactions</h2>
            </div>
          ) : (
            <SiMoneygram className="text-2xl" />
          )}
          {sidebarActive ? (
            <div className="linksss flex items-center gap-2">
              <SiSpeedypage />
              <h2 className="font-semibold">Performance</h2>
            </div>
          ) : (
            <SiSpeedypage className="text-2xl" />
          )}
          {sidebarActive ? (
            <div className="linksss flex items-center gap-2">
              <BsNewspaper />
              <h2 className="font-semibold">News</h2>
            </div>
          ) : (
            <BsNewspaper className="text-2xl" />
          )}
          {sidebarActive ? (
            <div className="linksss flex items-center gap-2">
              <IoSettingsSharp />
              <h2 className="font-semibold">Setting</h2>
            </div>
          ) : (
            <IoSettingsSharp className="text-2xl" />
          )}
          {sidebarActive ? (
            <div className="linksss flex items-center gap-2">
              <MdSupportAgent />
              <h2 className="font-semibold">Support</h2>
            </div>
          ) : (
            <MdSupportAgent className="text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
