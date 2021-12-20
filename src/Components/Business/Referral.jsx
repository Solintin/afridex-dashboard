import BoltIcon from "@mui/icons-material/Bolt";
import { useRef, useState } from "react";
import ReferralTable from "../ReferralTable";
import RightHandle from "../RightTopHandle";
import Alert from "../Alert";

const Transactions = () => {
  const [openNotify, setOpenNotify] = useState(false);

  const copyText = useRef("");
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
    <section className="">
      <div className=" mb-9 flex justify-between items-center">
        <div className="font-bold text-2xl md:text-lg  ml-8 md:ml-0">
          Referrals
        </div>

        <div className="flex md:hidden">
          <RightHandle />
        </div>
        <div className="hidden md:flex items-center">
          <button className="text-afridex-core hover:bg-afridex-core hover:text-white rounded-lg border border-afridex-core p-2 flex">
            <span className="mr-2">
              <BoltIcon className="hover:text-white transition duration-300"></BoltIcon>
            </span>
            <span>Transfer</span>
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

      <div className="my-5 bg-white rounded-xl shadow-md">
        <div className="p-3 ">
          <div className="flex ">
            <div>Your Cards</div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="my-5 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300  border ">
              <div className="p-3 ">
                <div className="space-y-4">
                  <div className="text-gray-500">Redeemed Referral</div>
                  <div className="font-bold text-3xl">22</div>
                </div>
              </div>
              <div className="flex border-t border-afridex-gray-300   p-2">
                <div className="ml-auto text-blue-700 py-1 px-2 cursor-pointer rounded-md">
                  View Report
                </div>
              </div>
            </div>
            <div className="my-5 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300  border ">
              <div className="p-3 ">
                <div className="space-y-4">
                  <div className="text-gray-500">Referral Code</div>
                  <div className="font-bold text-3xl" ref={copyText}>
                    A53GDS
                  </div>
                </div>
              </div>
              <div className="flex justify-end  space-x-4 border-t border-afridex-gray-300  p-2">
                <div className="py-1 text-blue-700 px-2 cursor-pointer rounded-md">
                  Share Via
                </div>
                <div
                  onClick={handleCopy}
                  className=" py-1 px-2 text-green-400 cursor-pointer rounded-md"
                >
                  Copy Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Alert
        message={"Referral Code Copied"}
        type={"success"}
        open={openNotify}
        handleCloseNotification={handleCloseNotification}
      />
      <div className=" mb-5 flex justify-between items-center">
        <div className="font-bold text-lg">Referral Activity</div>
      </div>

      <ReferralTable />
    </section>
  );
};

export default Transactions;
