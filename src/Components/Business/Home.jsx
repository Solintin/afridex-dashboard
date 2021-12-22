import BoltIcon from "@mui/icons-material/Bolt";
import wallet from "../../assets/images/Wallet.png";
import transfer from "../../assets/images/transfer.svg";
import buy from "../../assets/images/buy.svg";
import BasicTable from "../Tables/Table";
import RightHandle from "../RightTopHandle";
import Carousel from "../Carousel";

import DepositDialog from "../Modals/Personal/Deposit";
import BuyUsdt from "../Modals/Personal/BuyUsdt";
import TransactionModal from "../Modals/Personal/TransactionModal";
import {  useState } from "react";


const DashboardContent = () => {
  //  const [openModal, setOpenModal] = useState(false)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [openTrsf, setOpenTrsf] = useState(false);

  const handleClickOpenTrsf = () => {
    setOpenTrsf(true);
  };
  const handleCloseTrsf = () => {
    setOpenTrsf(false);
  };
  const [openUsdt, setOpenUsdt] = useState(false);

  const handleClickOpenUsdt = () => {
    setOpenUsdt(true);
  };
  const handleCloseUsdt = () => {
    setOpenUsdt(false);
  };



  return (
    <section className="">
      <div className=" mb-9 flex justify-between items-center">
        <div className="font-bold text-2xl md:text-lg  ml-8 md:ml-0">Home</div>

        <div className="flex md:hidden">
          <RightHandle />
        </div>

        <div className="hidden md:flex items-center">
          <button  onClick={handleClickOpenUsdt} className="text-afridex-core hover:bg-afridex-core hover:text-white rounded-lg border border-afridex-core p-2 flex">
            <span className="mr-2">
              <BoltIcon className="hover:text-white transition duration-300"></BoltIcon>
            </span>
            <span>Fund Wallet</span>
          </button>
          <div className="bg-white rounded-md h-10 w-10 ml-2 mr-1 grid place-content-center">
            <i className="fa fa-cog text-afridex-gray  hover:text-black transition duration-300"></i>
          </div>
          <div className="bg-white rounded-md  h-10 w-10 grid place-content-center">
            <i className="fa fa-bell text-afridex-gray  hover:text-black transition duration-300"></i>
          </div>
          <div className="bg-white rounded-md  h-10 w-10  ml-2 grid place-content-center">
            <i className="fa fa-user"></i>
          </div>
        </div>
      </div>

      <div className="my-10 flex flex-col lg:flex-row md:space-x-4 cursor-pointer">
        <div className=" w-full lg:w-420px">
          <Carousel />
        </div>

        <div className="p-3 bg-white w-full rounded-xl my-2 flex-col transform hover:scale-105 transition-all duration-200 space-y-4">
          <div>
            <img src={wallet} alt="wallet" />
          </div>

          <div className="font-bold text-black text-lg">Buy Crypto</div>
          <div className="font-thin text-gray-500 text-xs">
            Lets you buy, sell, store and trade BTC
          </div>
          <button
            onClick={handleClickOpenUsdt}
            className="w-8/12   text-center  transition duration-300 hover:bg-afridex-core-hover  p-1 text-sm font-bold rounded-md bg-afridex-core text-white"
          >
            Buy USDT
          </button>
        </div>
        <div className="p-3 bg-white w-full rounded-xl my-2 flex-col transform hover:scale-105 transition-all duration-200 space-y-4">
          <div>
            <img src={transfer} alt="transfer" />
          </div>

          <div className="font-bold text-black text-lg"> Transfer to Bank</div>
          <div className="font-thin text-gray-500 text-xs">
            Initiate a quick fund transfer to your bank
          </div>
          <button
            onClick={handleClickOpenTrsf}
            className="w-8/12 transition duration-300 hover:bg-green-500  p-1 text-sm font-bold rounded-md text-center bg-green-400 text-white"
          >
            Transfer
          </button>
        </div>
        <div className="p-3 bg-white w-full rounded-xl my-2 flex-col transform hover:scale-105 transition-all duration-200 space-y-4">
          <div>
            <img src={buy} alt="wallet" />
          </div>

          <div className="font-bold text-black text-lg">Deposit USDT</div>
          <div className="font-thin text-gray-500 text-xs">
            Lets you buy, sell, store and trade BTC
          </div>
          <button
            onClick={handleClickOpen}
            className="w-8/12 transition duration-300 hover:bg-blue-500  p-1 text-sm font-bold rounded-md text-center bg-blue-700 text-white"
          >
            Deposit USDT
          </button>
        </div>
      </div>

      <DepositDialog open={open} handleClose={handleClose} />
      <BuyUsdt open={openUsdt} handleClose={handleCloseUsdt} />
      <TransactionModal open={openTrsf} handleClose={handleCloseTrsf} />

      <div className=" mb-5 flex justify-between items-center">
        <div className="font-bold text-lg">Transaction History</div>
        <div className="flex text-sm font-medium items-center space-x-3">
          <div className="bg-white rounded-md  border border-afridex-neutral p-2 flex items-center ">
            <svg
              className="mr-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 1.66699V5.00033M6.66667 1.66699V5.00033M2.5 8.33366H17.5M4.16667 3.33366H15.8333C16.7538 3.33366 17.5 4.07985 17.5 5.00033V16.667C17.5 17.5875 16.7538 18.3337 15.8333 18.3337H4.16667C3.24619 18.3337 2.5 17.5875 2.5 16.667V5.00033C2.5 4.07985 3.24619 3.33366 4.16667 3.33366Z"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Select Dates
          </div>
          <div className="bg-white rounded-md border border-afridex-neutral p-2  flex items-center ">
            <svg
              className="mr-2"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H14M1.5 1H16.5M6.5 11H11.5"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Apply Filter
          </div>
        </div>
      </div>

      <BasicTable />
   
    </section>
  );
};

export default DashboardContent;
