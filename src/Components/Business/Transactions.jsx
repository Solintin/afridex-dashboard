import BasicTable from "../Table";

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
          <select
            name=""
            id=""
            className="bg-white rounded-md h-10 w-20 outline-none"
          >
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

      <div className="my-5 grid lg:grid-cols-4  md:grid-cols-2  gap-6 cursor-pointer">
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
              Total Transactions
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
                Total Payment Collection
              </div>
              <div className="font-semibold text-2xl mb-7">$1,870</div>
            </div>
  
            <div className="font-semibold text-sm ">
              <span className="mr-1 text-green-400">₮ 34,391.92 </span>{" "}
              <span> - ₦14,447,690</span>{" "}
            </div>
          </div>
          







        <div className="rounded-2xl shadow-lg space-y-5 transform duration-200 hover:-translate-y-2 bg-white flex-col p-3">
         
            <div>
              <div className="rounded-lg shadow-lg bg-green-100 w-min grid p-2">
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
                Total Wallet Funding
              </div>
              <div className="font-semibold text-2xl mb-7">$5,34,394</div>
            </div>
  
            <div className="font-semibold text-sm ">
              <span className="mr-1 text-green-400">₮ 34,391.92 </span>{" "}
              <span> - ₦14,447,690</span>{" "}
            </div>
          </div>
       
          



        <div className="rounded-2xl shadow-lg space-y-5 transform duration-200 hover:-translate-y-2 bg-white flex-col p-3">
          
            <div>
              <div className="rounded-lg shadow-lg bg-red-100 w-min grid p-2">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.44218 4.16644H9.94218V11.6664H7.44218V14.1664H5.77551V11.6664H3.27551V4.16644H5.77551V1.66644H7.44218V4.16644ZM15.7755 8.33311H18.2755V15.8331H15.7755V18.3331H14.1088V15.8331H11.6088V8.33311H14.1088V5.83311H15.7755V8.33311Z" fill="#EB5757"/>
</svg>

              </div>
            </div>
            <div className="">
              <div className="font-medium text-xs text-gray-500">
                Total Withdrawals
              </div>
              <div className="font-semibold text-2xl mb-7">$5,34,394</div>
            </div>
  
            <div className="font-semibold text-sm ">
              <span className="mr-1 text-green-400">₮ 34,391.92 </span>{" "}
              <span> - ₦14,447,690</span>{" "}
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
