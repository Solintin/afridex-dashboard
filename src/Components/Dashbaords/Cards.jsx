import BoltIcon from "@mui/icons-material/Bolt";
import BasicCardTable from "../CardTable";

const Transactions = () => {
  return (
    <section className="max-w-6xl">
      <div className=" mb-9 flex justify-between items-center">
        <div className="font-bold text-lg">Cards</div>
        <div className="flex items-center">
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
          <div className="flex justify-between">
            <div>Your Cards</div>
            <div>
              <i
                class="fa fa-ellipsis-v cursor-pointer text-gray-400"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div className="my-5 grid lg:grid-cols-3 gap-6 cursor-pointer">
            <div>
              <div className="flex flex-col rounded-xl transform hover:scale-105 transition-all duration-300   max-w-300px ml-2 mr-1">
                <div className=" p-6  h-48 space-y-24  rounded-xl bg-purple-700  flex flex-col">
                  <div className="flex justify-between">
          
                    <div className=" font-thin text-white text-base">
                      Afridex
                    </div>
                    <div>
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2444 1.34277C17.0418 4.45601 17.9881 7.98752 17.9881 11.5824C17.9881 15.1772 17.0418 18.7087 15.2444 21.822M10.739 3.59549C12.141 6.02381 12.879 8.77839 12.879 11.5824C12.879 14.3864 12.141 17.1409 10.739 19.5693M6.43833 5.66389C7.45208 7.43843 7.98577 9.45139 7.98577 11.5005C7.98577 13.5495 7.45208 15.5625 6.43833 17.337M2.1377 7.89612C2.86829 9.00184 3.25563 10.279 3.25563 11.5824C3.25563 12.8857 2.86829 14.1629 2.1377 15.2686"
                          stroke="white"
                          stroke-width="2.4575"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm text-white">
                      <h1>
                        Usman Abiola <span className="ml-4 ">06/24</span>
                      </h1>
                      <div className="flex justify-between">
                        <div>1234</div>
                        <div>1234</div>
                        <div>1234</div>
                        <div>1234</div>
                        <div><svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1978 17.1933C24.9698 17.1933 28.8382 13.3709 28.8382 8.65572C28.8382 3.94056 24.9698 0.118164 20.1978 0.118164C18.0591 0.118164 16.1018 0.886016 14.5929 2.15795C13.0842 0.88625 11.1271 0.118556 8.98852 0.118556C4.21657 0.118556 0.348145 3.94095 0.348145 8.65611C0.348145 13.3713 4.21657 17.1937 8.98852 17.1937C11.1273 17.1937 13.0846 16.4258 14.5934 15.1539C16.1022 16.4256 18.0593 17.1933 20.1978 17.1933Z" fill="#ED0006"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5928 15.1539C16.4506 13.5879 17.6287 11.2578 17.6287 8.65572C17.6287 6.05368 16.4506 3.72352 14.5928 2.15757C16.1015 0.885864 18.0587 0.118164 20.1972 0.118164C24.9692 0.118164 28.8376 3.94056 28.8376 8.65572C28.8376 13.3709 24.9692 17.1933 20.1972 17.1933C18.0587 17.1933 16.1015 16.4256 14.5928 15.1539Z" fill="#F9A000"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5928 15.1541C16.4505 13.5882 17.6285 11.2581 17.6285 8.65615C17.6285 6.05422 16.4505 3.72415 14.5928 2.1582C12.7351 3.72415 11.5571 6.05422 11.5571 8.65615C11.5571 11.2581 12.7351 13.5882 14.5928 15.1541Z" fill="#FF5E00"/>
                        </svg>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="flex  flex-col p-2">
                <div className="flex justify-between">
                  <h1 className="text-gray-700 text-sm font-bold">
                    Card Balance
                  </h1>
                  <h1 className="text-gray-700 text-sm ">2,840.40 USDT</h1>
                </div>
                <div className="w-full h-2 rounded-xl bg-gray-300">
                  <div className=" h-full w-7/12 rounded-xl bg-afridex-core"></div>
                </div>
              </div>
            </div>

            <div>
            <div className="flex flex-col rounded-xl transform hover:scale-105 transition-all duration-300   max-w-300px ml-2 mr-1">
            <div className=" p-6  h-48 space-y-24  rounded-xl bg-purple-700  flex flex-col">
              <div className="flex justify-between">
      
                <div className=" font-thin text-white text-base">
                  Afridex
                </div>
                <div>
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2444 1.34277C17.0418 4.45601 17.9881 7.98752 17.9881 11.5824C17.9881 15.1772 17.0418 18.7087 15.2444 21.822M10.739 3.59549C12.141 6.02381 12.879 8.77839 12.879 11.5824C12.879 14.3864 12.141 17.1409 10.739 19.5693M6.43833 5.66389C7.45208 7.43843 7.98577 9.45139 7.98577 11.5005C7.98577 13.5495 7.45208 15.5625 6.43833 17.337M2.1377 7.89612C2.86829 9.00184 3.25563 10.279 3.25563 11.5824C3.25563 12.8857 2.86829 14.1629 2.1377 15.2686"
                      stroke="white"
                      stroke-width="2.4575"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-sm text-white">
                  <h1>
                    Usman Abiola <span className="ml-4 ">06/24</span>
                  </h1>
                  <div className="flex justify-between">
                    <div>1234</div>
                    <div>1234</div>
                    <div>1234</div>
                    <div>1234</div>
                    <div><svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1978 17.1933C24.9698 17.1933 28.8382 13.3709 28.8382 8.65572C28.8382 3.94056 24.9698 0.118164 20.1978 0.118164C18.0591 0.118164 16.1018 0.886016 14.5929 2.15795C13.0842 0.88625 11.1271 0.118556 8.98852 0.118556C4.21657 0.118556 0.348145 3.94095 0.348145 8.65611C0.348145 13.3713 4.21657 17.1937 8.98852 17.1937C11.1273 17.1937 13.0846 16.4258 14.5934 15.1539C16.1022 16.4256 18.0593 17.1933 20.1978 17.1933Z" fill="#ED0006"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5928 15.1539C16.4506 13.5879 17.6287 11.2578 17.6287 8.65572C17.6287 6.05368 16.4506 3.72352 14.5928 2.15757C16.1015 0.885864 18.0587 0.118164 20.1972 0.118164C24.9692 0.118164 28.8376 3.94056 28.8376 8.65572C28.8376 13.3709 24.9692 17.1933 20.1972 17.1933C18.0587 17.1933 16.1015 16.4256 14.5928 15.1539Z" fill="#F9A000"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5928 15.1541C16.4505 13.5882 17.6285 11.2581 17.6285 8.65615C17.6285 6.05422 16.4505 3.72415 14.5928 2.1582C12.7351 3.72415 11.5571 6.05422 11.5571 8.65615C11.5571 11.2581 12.7351 13.5882 14.5928 15.1541Z" fill="#FF5E00"/>
                    </svg>
                    </div>
                  </div>
                </div>
            </div>
          </div>
              <div className="flex  flex-col p-2">
                <div className="flex justify-between">
                  <h1 className="text-gray-700 text-sm font-bold">
                    Card Balance
                  </h1>
                  <h1 className="text-gray-700 text-sm ">740.40 USDT</h1>
                </div>
                <div className="w-full h-2 rounded-xl bg-gray-300">
                  <div className=" h-full w-4/12 rounded-xl bg-afridex-core"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-t border-afridex-gray-300 p-2">
          <div className="ml-auto py-1 px-2 cursor-pointer transition-all duration-300 hover:bg-afridex-core hover:text-white border border-gray-300 rounded-md">
            Add new card
          </div>
        </div>
      </div>

      <div className=" mb-5 flex justify-between items-center">
        <div className="font-bold text-lg">Transaction History</div>
       
      </div>

      <BasicCardTable />
    </section>
  );
};

export default Transactions;
