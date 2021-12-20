import "../../assets/styles/dashboard.css";
import afridex_logo from "../../assets/images/afridex_logo.svg";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BusinessHome from "../../Components/Business/Home";
import BusinessTransactions from "../../Components/Business/Transactions";
import BusinessTransactionDetails from "../../Components/Business/TransactionDetails";
import BusinessCards from "../../Components/Business/Cards";
import BusinessReferral from "../../Components/Business/Referral";
import BusinessSettings from "../../Components/Business/Settings";
import BusinessPayment from "../../Components/Business/Payment";
export default function Dashboard() {
  const sidebarContent = [
    {
      link: "/business/home",
      icon: "fa fa-home-lg-alt",
      title: "Home",
    },
    {
      link: "/business/transactions",
      icon: "fa fa-chart-bar",
      title: "Transactions",
    },
    {
      link: "/business/card",
      icon: "fa fa-credit-card",
      title: "Cards",
    },
    {
      link: "/business/payments",
      icon: "fa fa-database",
      title: "Payment Collection",
    },
    {
      link: "/business/referral",
      icon: "fa fa-layer-group",
      title: "Referral",
    },
    {
      link: "/business/settings",
      icon: "fa fa-cog",
      title: "Settings",
    },
  ];
  const pathname = window.location.pathname;

  const [backdrop, setBackDrop] = useState(false);
  const [showAside, setShowAside] = useState(false);

  let navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/business/") {
      navigate("/business/home");
    }
  });
  const handleToggle = () => {
    setShowAside(!showAside);
    setBackDrop(!backdrop);
  };
  return (
    <>
      <div
        onClick={handleToggle}
        className="menu-toggle md:hidden z-10  border bg-blue-50 rounded-full shadow-lg p-1 absolute -top-1 left-3 mr-5 mt-4"
      >
        <svg
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 17.0065H3C2.73478 17.0065 2.48043 17.1121 2.29289 17.2999C2.10536 17.4877 2 17.7425 2 18.0082C2 18.2738 2.10536 18.5286 2.29289 18.7164C2.48043 18.9043 2.73478 19.0098 3 19.0098H13C13.2652 19.0098 13.5196 18.9043 13.7071 18.7164C13.8946 18.5286 14 18.2738 14 18.0082C14 17.7425 13.8946 17.4877 13.7071 17.2999C13.5196 17.1121 13.2652 17.0065 13 17.0065ZM3 8.9934H21C21.2652 8.9934 21.5196 8.88787 21.7071 8.70002C21.8946 8.51218 22 8.25741 22 7.99175C22 7.7261 21.8946 7.47133 21.7071 7.28349C21.5196 7.09564 21.2652 6.99011 21 6.99011H3C2.73478 6.99011 2.48043 7.09564 2.29289 7.28349C2.10536 7.47133 2 7.7261 2 7.99175C2 8.25741 2.10536 8.51218 2.29289 8.70002C2.48043 8.88787 2.73478 8.9934 3 8.9934ZM21 11.9983H3C2.73478 11.9983 2.48043 12.1039 2.29289 12.2917C2.10536 12.4795 2 12.7343 2 13C2 13.2656 2.10536 13.5204 2.29289 13.7082C2.48043 13.8961 2.73478 14.0016 3 14.0016H21C21.2652 14.0016 21.5196 13.8961 21.7071 13.7082C21.8946 13.5204 22 13.2656 22 13C22 12.7343 21.8946 12.4795 21.7071 12.2917C21.5196 12.1039 21.2652 11.9983 21 11.9983Z"
            fill="black"
          />
        </svg>
      </div>

      <div className="dashboard-container h-screen relative  overflow-x-hidden overflow-y-hidden   grid grid-cols-12">
        {backdrop ? (
          <div
            onClick={handleToggle}
            className="backdrop z-20 cursor-pointer absolute inset-0 b z-2 bg-black bg-opacity-40"
          ></div>
        ) : null}

        <aside
          className={`sidebar h-screen bg-white space-y-4 flex flex-col p-5
           fixed transition-all duration-300 ease-in md:relative z-50 w-12/12 md:w-full md:col-span-3 lg:col-span-2
           ${showAside ? "isOpen" : null}`}
        >
          <div>
            <Link to="/">
              <img src={afridex_logo} alt="logo" className="" />
            </Link>
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
                <a
                  href={item.link}
                  key={idx}
                  className={`transform hover:scale-110 transition-all duration-300 flex text-base font-medium  hover:bg-afridex-core hover:text-white  rounded-lg p-2 ${
                    pathname.includes(item.link)
                      ? "bg-afridex-core text-white "
                      : "text-gray-500"
                  }`}
                >
                  <span>
                    <i className={`mr-3 ${item.icon}`}></i>
                  </span>
                  <span> {item.title} </span>
                </a>
              );
            })}
          </div>
        </aside>
        <div className="col-span-12 md:col-span-9 lg:col-span-10 overflow-y-scroll  px-4 lg:px-30px py-3 w-full">
       
       
        <Routes>
            <Route path="/home" element={<BusinessHome />} />
            <Route path="/transactions/" element={<BusinessTransactions />} />
            <Route path="/payment/" element={<BusinessPayment />} />

            <Route
              path="/transactions/details/"
              element={<BusinessTransactionDetails />}
            />

            <Route path="/card" element={<BusinessCards />} />
            <Route path="/referral" element={<BusinessReferral />} />
            <Route path="/settings" element={<BusinessSettings />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
