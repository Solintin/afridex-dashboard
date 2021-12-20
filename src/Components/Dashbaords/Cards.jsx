import BoltIcon from "@mui/icons-material/Bolt";
import { useState } from "react";
import BasicCardTable from "../CardTable";
import CardDetail from "../Modals/CardDetail";
import PersonalCard from "../PersonalCard";
import RightHandle from "../RightHandle";

const Transactions = () => {
  const [open, setOpen] = useState(false);
  const [cardCounter, setCardCounter] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="">
      <div className=" mb-9 flex justify-between items-center">
        <div className="font-bold text-2xl md:text-lg  ml-8 md:ml-0">Cards</div>

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
      <div className="my-5  w-full overflow-x-scroll lg:overflow-x-hidden bg-white rounded-xl shadow-md">
        <div className="p-3 ">
          <div className="flex justify-between">
            <div>Your Cards</div>
            <div>
              <i
                class="fa fa-ellipsis-v cursor-pointer text-gray-400"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div className="my-5  w-full overflow-x-scroll lg:overflow-x-hidden  grid lg:grid-cols-3 gap-6 cursor-pointer ">
            {[...Array(cardCounter)].map((i, idx) => {
              return <PersonalCard handleClickOpen={handleClickOpen} />;
            })}
          </div>
        </div>
        <div className="flex border-t border-afridex-gray-300 p-2">
          <div onClick={() =>{ setCardCounter( cardCounter + 1)}} className="ml-auto py-1 px-2 cursor-pointer transition-all duration-300 hover:bg-afridex-core hover:text-white border border-gray-300 rounded-md">
            Add new card
          </div>
        </div>
      </div>

      <CardDetail open={open} handleClose={handleClose} />

      <div className=" mb-5 flex justify-between items-center">
        <div className="font-bold text-lg">Transaction History</div>
      </div>

      <BasicCardTable />
    </section>
  );
};

export default Transactions;
