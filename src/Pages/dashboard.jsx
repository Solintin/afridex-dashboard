import "../assets/styles/dashboard.css";
import afridex_logo from "../assets/images/afridex_logo.svg";
import { Link } from "react-router-dom";
import DashboardContent from "../Components/DashboardContent";
export default function Dashboard() {
  const sidebarContent = [
    {
        active : true,
      link: "#",
      icon: "fa fa-home-lg-alt",
      title: "Home",
    },
    {
        active : false,
      link: "#",
      icon: "fa fa-chart-bar",
      title: "Transaction",
    },
    {
        active : false,
      link: "#",
      icon: "fa fa-credit-card",
      title: "Card",
    },
    {
        active : false,
      link: "#",
      icon: "fa fa-layer-group",
      title: "Referral",
    },
    {
        active : false,
      link: "#",
      icon: "fa fa-cog",
      title: "Settings",
    },
  ];
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
            className="absolute border-2 pl-8  pr-3 py-2 mt-14 border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
          />
        </div>
        <div className="pt-12 space-y-7  ">
          {sidebarContent.map((item) => {
            return (
              <li
                key={item + 1}
                className={`flex text-base font-medium   rounded-lg p-2 ${ item.active ? 'bg-afridex-core text-white' : 'text-gray-500' }`}>
                <span>
                  <i className={`mr-3 ${item.icon}`}></i>
                </span>
                <span className={` flex items-center ${ item.active ? 'text-white' : 'text-gray-500'} `}>
                  <Link to={item.link}> {item.title} </Link>
                </span>
              </li>
            );
          })}
        </div>
      </div>
      <div className="ml-280px p-30px w-full">
        <DashboardContent />
      </div>
    </div>
  );
}
