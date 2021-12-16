import BasicTable from "../Table";

const Transactions = () => {
 

  return (
    <section className="max-w-6xl">
      <div className=" mb-9 flex justify-between items-center">
        <div className="font-bold text-lg">Transactions</div>
        <div className="flex items-center">
        <select name="" id="" className="bg-transparent outline-none">
        <option value="usd">$USD</option>
        <option value="usd">#NGN</option>
        <option value="usd">%YEN</option>
        </select>
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

      <div className="my-5 grid lg:grid-cols-3 gap-6 cursor-pointer">
        <div className="rounded-md  shadow-md space-y-5 transform duration-200 hover:-translate-y-2 bg-white flex-col p-3">
          <div className="font-medium text-base text-gray-500">
            Total Transactions
          </div>

          <div className="font-semibold text-3xl ">
          $120,280
          </div>
        </div>
        <div className="rounded-md  shadow-md space-y-5 transform duration-200 hover:-translate-y-2 bg-white flex-col p-3">
          <div className="font-medium text-base text-gray-500">
            Total Wallet Funding
          </div>

          <div className="font-semibold text-3xl ">
          $120,280
          </div>
        </div>
        <div className="rounded-md  shadow-md space-y-5 transform duration-200 hover:-translate-y-2 bg-white flex-col p-3">
          <div className="font-medium text-base text-gray-500">
            Total Withdrawals
          </div>

          <div className="font-semibold text-3xl ">
          $90,280
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
