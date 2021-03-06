import React from "react";
import afridex_coin from "../assets/images/afridex_coin.svg";
import Alert from "./Alert";

const MainCard = () => {
  const [openNotify, setOpenNotify] = React.useState(false);

  const copyText = React.useRef("");
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText.current.innerHTML).then(
      function () {
        setOpenNotify(true);
      },
      function () {
        alert("Copying Failed");
      }
    );
  };
  const handleCloseNotification = () => {
    setOpenNotify(false);
  };
  return (
    <div>
      <div className="flex flex-col rounded-xl my-2   h-full w-full   ">
        <div className="h-3/4 p-6  w-full rounded-t-xl bg-afridex-core  flex justify-between">
          <div className="flex-col space-y-5 text-white">
            <h4 className="font-thin text-base -ml-12">USCD Wallet</h4>
            <h1 className="font-bold text-3xl -ml-20">1034</h1>
            <h1 className="text-sm">
              <i className="fa fa-arrow-up text-green-500  "></i> $1034{" "}
              <span className="text-gray-500">USD Equivalent</span>{" "}
            </h1>
          </div>
          <div>
            <img src={afridex_coin} alt="afridex-coin" />
          </div>
        </div>
        <div className="h-full w-full   px-6 py-2 rounded-b-xl bg-blue-800">
          <h2 className="text-white -ml-52  md:-ml-64">Wallet Address</h2>
          <div className="flex justify-between">
            <div ref={copyText} className="text-gray-500 text-lg ml-1 mr-5 truncate">
              0xa0b86991c62...9eb0ce3606eb48
            </div>
            <div onClick={handleCopy} className="cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16675 12.5003H3.33341C2.89139 12.5003 2.46746 12.3247 2.1549 12.0122C1.84234 11.6996 1.66675 11.2757 1.66675 10.8337V3.33366C1.66675 2.89163 1.84234 2.46771 2.1549 2.15515C2.46746 1.84259 2.89139 1.66699 3.33341 1.66699H10.8334C11.2754 1.66699 11.6994 1.84259 12.0119 2.15515C12.3245 2.46771 12.5001 2.89163 12.5001 3.33366V4.16699M9.16675 7.50033H16.6667C17.5872 7.50033 18.3334 8.24652 18.3334 9.16699V16.667C18.3334 17.5875 17.5872 18.3337 16.6667 18.3337H9.16675C8.24627 18.3337 7.50008 17.5875 7.50008 16.667V9.16699C7.50008 8.24652 8.24627 7.50033 9.16675 7.50033Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Alert
        message={"Wallet Address Copied"}
        type={"success"}
        open={openNotify}
        handleCloseNotification={handleCloseNotification}
      />
    </div>
  );
};

export default MainCard;
