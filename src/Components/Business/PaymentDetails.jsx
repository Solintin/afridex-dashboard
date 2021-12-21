import BasicTable from "../Tables/Table";

const Transactions = () => {
  const goBack = () => window.history.back();
  return (
    <section className="">
      <div className="p-4">
        <span
          onClick={goBack}
          className="cursor-pointer mt-2 mb-5 flex items-center text-afridex-core text-base "
        >
          <span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8327 10.5003H4.16602M4.16602 10.5003L9.99935 16.3337M4.16602 10.5003L9.99935 4.66699"
                stroke="#0F92BF"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>{" "}
          Back to all Links
        </span>

        <div className="bg-white  rounded-lg shadow-md p-5">
          <div className="flex justify-between  my-4 text-black font-bold text-lg">
            <div>Payment Link Detail </div>

            <div className="flex space-x-2">
              <button className=" bg-gray-500  items-center my-2  text-white rounded-lg border  px-2 flex">
                <span className="mr-1">
                  <div className="h-2 w-2 bg-white rounded-full mr-2"></div>
                </span>
                <span>Edit</span>
              </button>
              <button className=" bg-afridex-core  items-center my-2  text-white rounded-lg border  px-2 flex">
                <span className="mr-1">
                  <div className="h-2 w-2 bg-white rounded-full mr-2"></div>
                </span>
                <span>Deactivate Link</span>
              </button>
              <button className=" bg-red-400  items-center my-2  text-white rounded-lg border  px-2 flex">
                <span className="mr-1">
                  <div className="h-2 w-2 bg-white rounded-full mr-2"></div>
                </span>
                <span>Delete</span>
              </button>
            </div>
          </div>

          <div className="flex justify-between border-b text-gray-400 py-2">
            <div>Link ID</div>
            <div  className="text-sm  leading-5 text-center whitespace-nowrap text-afridex-core font-medium">
            2716w821
          </div>
          </div>
          <div className="flex justify-between border-b text-gray-400 py-2">
            <div>Amount</div>
            <div className="text-black">193.973 USDT</div>
          </div>
          <div className="flex justify-between border-b text-gray-400 py-2">
            <div>Amount in NGN</div>
            <div className="text-black">80,207.84 NGN</div>
          </div>
          <div className="flex justify-between border-b text-gray-400 py-2">
            <div>Link Name 
            </div>
            <div className="text-black">Preseed Funding</div>
          </div>
          <div className="flex justify-between border-b text-gray-400 py-2">
            <div>Link Addrss</div>
            <div className="text-black">https://afridex.com/pay/preseedfunding</div>
          </div>
          <div className="flex justify-between border-b text-gray-400 py-2">
            <div>Created on</div>
            <div className="text-black">10/10/2021   10:09pm</div>
          </div>
          <div className="flex justify-between border-b text-gray-400 py-2">
            <div>Fees</div>
            <div className="text-black">0.0181 USDT</div>
          </div>
          <div className="flex justify-between border-b text-gray-400 py-2">
            <div>Status</div>
            <div className="bg-green-200 px-2  rounded-xl py-1 flex justify-center items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
              <span className="font-bold text-xs text-green-500">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>





     
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

export default Transactions;
