import PaymentTable from "../PaymentTable";
import BoltIcon from "@mui/icons-material/Bolt";

import RightHandle from "../RightTopHandle";

const Transactions = () => {
  return (
    <section className="">
      <div className=" mb-9 flex justify-between items-center">
        <div className="font-bold text-2xl md:text-lg  ml-8 md:ml-0">
          Transactions
        </div>

        <div className="flex md:hidden">
          <RightHandle />
        </div>
        <div className="hidden md:flex  items-center">
          <button className="text-afridex-core hover:bg-afridex-core hover:text-white rounded-lg border border-afridex-core p-2 flex">
            <span className="mr-2">
              <BoltIcon className="hover:text-white transition duration-300"></BoltIcon>
            </span>
            <span>Create Payment Link</span>
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

      <div className="my-5 grid md:grid-cols-2   gap-6 lg:gap-10 cursor-pointer">
        <div className="rounded-2xl shadow-lg space-y-5 transform duration-200 hover:-translate-y-2 bg-white flex-col p-3">
          <div>
            <div className="rounded-lg shadow-lg bg-purple-100 w-min grid p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99996 18.3331C5.39746 18.3331 1.66663 14.6023 1.66663 9.99978C1.66663 5.39728 5.39746 1.66644 9.99996 1.66644C14.6025 1.66644 18.3333 5.39728 18.3333 9.99978C18.3333 14.6023 14.6025 18.3331 9.99996 18.3331ZM7.91663 7.49978L5.83329 9.58311L9.99996 13.7498L14.1666 9.58311L12.0833 7.49978H7.91663Z"
                  fill="#0F92BF"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <div className="font-medium text-xs text-gray-500">
              Payment Link Transactions
            </div>
            <div className="font-semibold text-2xl mb-7">$34,394</div>
          </div>

          <div className="font-semibold text-sm ">
            <span className="mr-1 text-green-400">₮ 34,391.92 </span>{" "}
            <span> - ₦14,447,690</span>{" "}
          </div>
        </div>

        <div className="rounded-2xl shadow-lg space-y-5 transform duration-200 hover:-translate-y-2 bg-white flex-col p-3">
          <div>
            <div className="rounded-lg shadow-lg bg-blue-100 w-min grid p-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99996 18.3331C5.39746 18.3331 1.66663 14.6023 1.66663 9.99978C1.66663 5.39728 5.39746 1.66644 9.99996 1.66644C14.6025 1.66644 18.3333 5.39728 18.3333 9.99978C18.3333 14.6023 14.6025 18.3331 9.99996 18.3331ZM7.91663 7.49978L5.83329 9.58311L9.99996 13.7498L14.1666 9.58311L12.0833 7.49978H7.91663Z"
                  fill="#0F92BF"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <div className="font-medium text-xs text-gray-500">
              All Active Payment Links
            </div>
            <div className="font-semibold text-2xl mb-7">11</div>
          </div>

          <div className="font-semibold text-sm ">
            <span className="mr-1 text-green-400">Ipdated </span>
            <span> -10/10/2021</span>
          </div>
        </div>
      </div>

      <div className=" mb-5 flex justify-between items-center">
        <div className="font-bold text-lg"> Payment Links</div>
        <div className="">
          <button className="text-afridex-core hover:bg-afridex-core hover:text-white rounded-lg border border-afridex-core p-2 flex">
            <span className="mr-2">
              <BoltIcon className="hover:text-white transition duration-300"></BoltIcon>
            </span>
            <span>Create Payment Link</span>
          </button>
        </div>
      </div>

      <PaymentTable />
    </section>
  );
};

export default Transactions;
