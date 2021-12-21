import afridex_coin from "../../assets/images/afridex_coin.svg";
import { useNavigate } from "react-router-dom";
import MobileTable from "./MobileTable";
import { useState } from "react";
import LinkSuccessAction from '../Modals/Business/LinkSuccessAction'
export default function BasicTable() {
  const navigator = useNavigate();
  const handleLink = (e) => {
      e.stopPropagation();
      
    if (window.location.pathname.includes("/payments")) {
      navigator(`${window.location.pathname}/details`);
    }
  };

  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MobileTable />

      <div className="hidden lg:flex table-section  mt-10 lg:mt-10 rounded-2xl bg-white shadow-2xl py-2">
        <div className="table-wrapper  w-full overflow-x-scroll lg:overflow-x-hidden pb-6">
          <table className="w-full items-center table-auto">
            <thead>
              <tr className="border-b border-gray-200 font-bold text-xs text-gray-400 leading-5">
                <th className="py-3 ">Currency</th>
                <th className="py-3 ">Link ID</th>
                <th className="py-3 ">Link Name</th>
                <th className="py-3 ">Created on</th>
                <th className="py-3 ">Amount</th>
                <th className="py-3">View</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {[...Array(10)].map((i, idx) => {
                return (
                  <tr
                   
                    key={idx}
                    className="hover:bg-gray-100 border-b border-gray-200 py-3 cursor-pointer"
                  >
                    <td className=" px-3 whitespace-nowrap pr-6">
                      <div className="flex justify-center items-center space-x-4">
                        <img
                          className="rounded-full w-36px h-36px"
                          src={afridex_coin}
                          alt=""
                        />
                        <div className="name">USDC</div>
                      </div>
                    </td>
                    <td className="text-sm px-3 leading-5 text-center whitespace-nowrap text-afridex-core font-medium">
                      2716w821
                    </td>
                    <td className="text-sm px-3 leading-5 text-center whitespace-nowrap text-black font-medium">
                      PreSale Funding
                    </td>
                    <td className="text-sm px-3 leading-5 text-center whitespace-nowrap text-black font-medium">
                      <span className="mr-2">10/10/2021 </span>
                      <span>10:09pm</span>
                    </td>
                    <td className="text-sm px-3 leading-5 text-center whitespace-nowrap text-black font-medium">
                      <span className="">$1492.5</span>
                    </td>
                    <td className="text-sm px-3 leading-5 text-center whitespace-nowrap  text-black font-medium">
                      <div className="w-min mx-auto bg-blue-100 my-auto px-3 rounded-xl py-1 flex justify-center items-center">
                        <div className="h-2 w-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="font-bold text-xs text-blue-400">
                          View Link
                        </span>
                      </div>
                    </td>
                    <td className="text-sm px-3 flex space-x-2 justify-center items-center whitespace-nowrap leading-5  text-afridex font-medium">
                      <div>
                        <button onClick={handleClickOpen} className=" bg-afridex-core  items-center my-2  text-white rounded-xl border  p-2 flex">
                          <span className="mr-1">
                            <div className="h-2 w-2 bg-white rounded-full mr-2"></div>
                          </span>
                          <span>Copy Link</span>
                        </button>
                      </div>
                      <div>
                      <button className=" bg-red-400  items-center my-2  text-white rounded-xl border  p-2 flex">
                      <span className="mr-1">
                        <div className="h-2 w-2 bg-white rounded-full mr-2"></div>
                      </span>
                      <span>Delete</span>
                    </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="see-more flex justify-center items-center mt-6">
            <a
              href="/"
              className="text-center mx-auto text-gray-700  font-bold underline text-sm leading-5"
            >
              See All Transactions
            </a>
          </div>
        </div>
      </div>
      <LinkSuccessAction open={open} handleClose={handleClose} />
      
    </>
  );
}
