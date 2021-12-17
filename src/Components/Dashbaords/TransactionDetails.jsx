import React from "react";

const TransactionDetails = () => {
    const goBack = () => window.history.back()
  return (
    <div className="p-4">
      <span onClick={goBack}  className="cursor-pointer mt-2 mb-5 flex items-center text-afridex-core text-base ">
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
        Back to all transactions
      </span>

      <div className="bg-white  rounded-lg shadow-md p-5">
        <div className="my-4 text-black font-bold text-lg">
          Transaction Details
        </div>

        <div className="flex justify-between border-b text-gray-400 py-2">
          <div>Transaction ID</div>
          <div className="text-black">H283738H372727</div>
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
          <div>Recipient Bank</div>
          <div className="text-black">Access Bank</div>
        </div>
        <div className="flex justify-between border-b text-gray-400 py-2">
          <div>Recipient Account Number</div>
          <div className="text-black">9127839171892</div>
        </div>
        <div className="flex justify-between border-b text-gray-400 py-2">
          <div>Recipient Account Name</div>
          <div className="text-black">Jeremiah Gyan</div>
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
              Successfull
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
