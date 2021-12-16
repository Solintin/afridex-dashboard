import "../assets/styles/dashboard.css";
import afridex_logo from "../assets/images/afridex_logo.svg";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashboardHome from "../Components/Dashbaords/Home";
import Transactions  from "../Components/Dashbaords/Transactions";
import Cards  from "../Components/Dashbaords/Cards";
import Referral  from "../Components/Dashbaords/Referral";
export default function Dashboard(prop) {
  const sidebarContent = [
    {
      active: true,
      link: "/dashboard/home",
      icon: "fa fa-home-lg-alt",
      title: "Home",
    },
    {
      active: false,
      link: "/dashboard/transactions",
      icon: "fa fa-chart-bar",
      title: "Transactions",
    },
    {
      active: false,
      link: "/dashboard/card",
      icon: "fa fa-credit-card",
      title: "Card",
    },
    {
      active: false,
      link: "/dashboard/referral",
      icon: "fa fa-layer-group",
      title: "Referral",
    },
    {
      active: false,
      link: "/dashboard/settings",
      icon: "fa fa-cog",
      title: "Settings",
    },
  ];
  const pathname = window.location.pathname;

  let navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/dashboard/home");
    }
  });
  return (
    <div className="dashboard-container flex">
      <div className="w-280px fixed h-screen bg-white space-y-4 flex flex-col p-5">
        <div>
          <img src={afridex_logo} alt="logo" className="" />
        </div>
        <div className="w-full   relative flex items-center">
          <div>
            <i className="absolute z-10 top-5 left-3 text-afridex-gray fa fa-search mr-2 "></i>
          </div>
          <input
            type="text"
            placeholder="Search.."
            className="absolute w-full border-2 pl-8  pr-3 py-2 mt-14 border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
          />
        </div>
        <div className="pt-12 space-y-7  ">
          {sidebarContent.map((item, idx) => {
            return (
              <li
                key={idx}
                className={`flex text-base font-medium   rounded-lg p-2 ${
                  pathname === item.link
                    ? "bg-afridex-core text-white"
                    : "text-gray-500"
                }`}
              >
                <span>
                  <i className={`mr-3 ${item.icon}`}></i>
                </span>
                <span
                  className={` flex items-center ${
                    pathname === item.link ? "text-white" : "text-gray-500"
                  } `}
                >
                  <Link to={item.link}> {item.title} </Link>
                </span>
              </li>
            );
          })}
        </div>
      </div>
      <div className="ml-280px p-30px w-full">
        <Routes>
          <Route path="/dashboard/home" element={<DashboardHome />} />
          <Route path="/dashboard/transactions" element={<Transactions />} />
          <Route path="/dashboard/card" element={<Cards />} />
          <Route path="/dashboard/referral" element={<Referral />} />
        </Routes>
      </div>
    </div>
  );
}
