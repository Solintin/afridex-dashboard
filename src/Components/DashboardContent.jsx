import BoltIcon from "@mui/icons-material/Bolt";
import afridex_coin from "../assets/images/afridex_coin.svg";
import wallet from "../assets/images/Wallet.svg";
import transfer from "../assets/images/transfer.svg";
import buy from "../assets/images/buy.svg";
 import BasicTable from '../Components/Table'
const DashboardContent = (props) => {
  return (
    <>
      <div className=" mb-9 flex justify-between items-center">
        <div className="font-bold text-lg" >Home</div>
        <div className="flex items-center">
          <button className="text-afridex-core hover:bg-afridex-core hover:text-white rounded-lg border border-afridex-core p-2 flex">
            <span className="mr-2">
              <BoltIcon className="hover:text-white transition duration-300"></BoltIcon>
            </span>
            Transfer Money
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

      <div className="my-10 flex space-x-3 items-stretch cursor-pointer">
        <div className="flex flex-col rounded-xl transform hover:scale-105 transition-all duration-300  h-60 w-420px ml-2 mr-1">
          <div className="h-3/4 p-6    rounded-t-xl bg-afridex-core  flex justify-between">
            <div className="flex-col space-y-5 text-white">
              <h4 className="font-thin text-base">USCD Wallet</h4>
              <h1 className="font-bold text-3xl">1034</h1>
              <h1 className="text-sm">
                <i className="fa fa-arrow-up text-green-500  "></i> $1034{" "}
                <span className="text-gray-500">USD Equivalent</span>{" "}
              </h1>
            </div>
            <div>
              <img src={afridex_coin} alt="afridex-coin" />
            </div>
          </div>
          <div className="h-1/45    px-6 py-2 rounded-b-xl bg-blue-800">
            <h2 className="text-white">Wallet Address</h2>
            <div className="flex justify-between">
              <div className="text-gray-500">
                0xa0b86991c62...9eb0ce3606eb48
              </div>
              <div className="cursor-pointer">
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

        <div className="p-3 bg-white rounded-xl flex-col transform hover:scale-105 transition-all duration-200 space-y-4">
          <div>
            <img src={wallet} alt="wallet" />
          </div>

          <div className="font-bold text-black text-lg">Buy Crypto</div>
          <div className="font-thin text-gray-500 text-xs">
            Lets you buy, sell, store and trade BTC
          </div>
          <button className="px-10 mx-auto transition duration-300 hover:bg-afridex-core-hover  p-1 text-sm font-bold rounded-md text-center bg-afridex-core text-white">
            Buy USDT
          </button>
        </div>
        <div className="p-3 bg-white rounded-xl flex-col transform hover:scale-105 transition-all duration-200 space-y-4">
          <div>
            <img src={transfer} alt="transfer" />
          </div>

          <div className="font-bold text-black text-lg"> Transfer to Bank</div>
          <div className="font-thin text-gray-500 text-xs">
            Initiate a quick fund transfer to your bank
          </div>
          <button className="px-10 mx-auto transition duration-300 hover:bg-green-500  p-1 text-sm font-bold rounded-md text-center bg-green-400 text-white">
            Transfer
          </button>
        </div>
        <div className="p-3 bg-white rounded-xl flex-col transform hover:scale-105 transition-all duration-200 space-y-4">
          <div>
            <img src={buy} alt="wallet" />
          </div>

          <div className="font-bold text-black text-lg">Deposit USDT</div>
          <div className="font-thin text-gray-500 text-xs">
            Lets you buy, sell, store and trade BTC
          </div>
          <button className="px-10 mx-auto transition duration-300 hover:bg-blue-500  p-1 text-sm font-bold rounded-md text-center bg-blue-700 text-white">
            Buy USDT
          </button>
        </div>
      </div>

      <div className=" mb-9 flex justify-between items-center">
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
    </>
  );
};

export default DashboardContent;
