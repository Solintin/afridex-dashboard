import React from 'react';
import afridex_coin from "../assets/images/afridex_coin.svg";

const MobileTable = () => {
    return (
        <div>
        {[...Array(10)].map((item, idx) => {
            return (
              <div key={idx} className=" my-5 lg:hidden bg-white flex flex-col w-full rounded-lg shadow-md p-2">
                <div className="flex justify-between">
                  <div>
                    <img
                      className="rounded-full w-36px h-36px"
                      src={afridex_coin}
                      alt=""
                    />{" "}
                  </div>
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                        stroke="#25324B"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>USDC</div>
                <div className="text-base leading-5  whitespace-nowrap text-black font-medium">
                  $100,000{" "}
                </div>
                <div className="text-lg text-gray-400">Transaction ID</div>
                <div className="flex justify-between">
                  <div className="text-base leading-5 text-center whitespace-nowrap text-afridex-core font-medium">
                    2716w821
                  </div>
                  <div className=" border border-blue-400 rounded-xl  py-1 px-2 flex justify-center items-center">
                    <span className="font-bold text-sm text-blue-500">
                      USDT Purchase
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    );
};

export default MobileTable;