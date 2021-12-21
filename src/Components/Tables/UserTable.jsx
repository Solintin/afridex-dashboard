import React from "react";

const Table = () => {
  return (
    <div>
      <div className="table-wrapper mt-5 w-full overflow-x-scroll lg:overflow-x-hidden pb-6">
        <table className="w-full items-center table-auto">
          <thead>
            <tr className="font-bold text-xs border-b-2 border-gray-400 py-3 mb-3 text-gray-400 leading-5">
              <th className="mb-1">
                <input className="py-3" type="checkbox" />
              </th>
              <th className="py-3 mb-1">User</th>
              <th className="py-3 mb-1">Email</th>
              <th className="py-3 mb-1">Role</th>
              <th className="py-3 mb-1">Last Activity</th>

              <th className="py-3 mb-1">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="cursor-pointer   border-b border-gray-400 py-3 mb-3">
              <td className=" px-3  whitespace-nowrap">
                <input className="checked:ring-0 " type="checkbox" />
              </td>
              <td className=" px-3 whitespace-nowrap pr-6">
                <div className="flex justify-center items-center space-x-4">
                  <div className="name">
                    <span className="text-xs block leading-5 font-bold text-bizz-black-100">
                      Adeyemi Marcus
                    </span>
                  </div>
                </div>
              </td>
              <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
                Ademeyi@gmail
              </td>
              <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-green font-medium">
                <div className="rounded-lg text-center font-semibold px-4 bg-green-500 text-green-600 bg-opacity-10 py-1">
                  Super Admin
                </div>
              </td>
              <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
                Thu, Jul 16th 2020 10:29pm
              </td>
              <td className="text-sm px-3 py-3 justify-center flex items-center leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
          <div className="rounded-md border border-gray-400 text-center  px-4 bg-opacity-10 py-2">
            View Activity
          </div>
            <i className= "ml-3 fa fa-ellipsis-v" aria-hidden="true"></i>
            <div></div>
        </td>
            </tr>



            <tr className="cursor-pointer   border-b border-gray-400 py-3 mb-3">
            <td className=" px-3  whitespace-nowrap">
              <input className="checked:ring-0 " type="checkbox" />
            </td>
            <td className=" px-3 whitespace-nowrap pr-6">
              <div className="flex justify-center items-center space-x-4">
                <div className="name">
                  <span className="text-xs block leading-5 font-bold text-bizz-black-100">
                    Adeyemi Marcus
                  </span>
                </div>
              </div>
            </td>
            <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
              Ademeyi@gmail
            </td>
            <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-green font-medium">
              <div className="rounded-lg text-center font-semibold px-4 bg-yellow-500 text-yellow-300 bg-opacity-10 py-1">
           Manager
              </div>
            </td>
            <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
              Thu, Jul 16th 2020 10:29pm
            </td>
            <td className="text-sm px-3 py-3 justify-center flex items-center leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
            <div className="rounded-md border border-gray-400 text-center  px-4 bg-opacity-10 py-2">
              View Activity
            </div>
              <i className= "ml-3 fa fa-ellipsis-v" aria-hidden="true"></i>
              <div></div>
          </td>
          </tr>



          <tr className="cursor-pointer   border-b border-gray-400 py-3 mb-3">
          <td className=" px-3  whitespace-nowrap">
            <input className="checked:ring-0 " type="checkbox" />
          </td>
          <td className=" px-3 whitespace-nowrap pr-6">
            <div className="flex justify-center items-center space-x-4">
              <div className="name">
                <span className="text-xs block leading-5 font-bold text-bizz-black-100">
                  Adeyemi Marcus
                </span>
              </div>
            </div>
          </td>
          <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
            Ademeyi@gmail
          </td>
          <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-green font-medium">
            <div className="rounded-lg text-center font-semibold px-4 bg-yellow-500 text-yellow-300 bg-opacity-10 py-1">
        Manager
            </div>
          </td>
          <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
            Thu, Jul 16th 2020 10:29pm
          </td>
          <td className="text-sm px-3 py-3 flex justify-center  items-center leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
          <div className="rounded-md border border-gray-400 text-center  px-4 bg-opacity-10 py-2">
            View Activity
          </div>
            <i className= "ml-3 fa fa-ellipsis-v" aria-hidden="true"></i>
            <div></div>
        </td>
        </tr>



        <tr className="cursor-pointer   border-b border-gray-400 py-3 mb-3">
        <td className=" px-3  whitespace-nowrap">
          <input className="checked:ring-0 " type="checkbox" />
        </td>
        <td className=" px-3 whitespace-nowrap pr-6">
          <div className="flex justify-center items-center space-x-4">
            <div className="name">
              <span className="text-xs block leading-5 font-bold text-bizz-black-100">
                Adeyemi Marcus
              </span>
            </div>
          </div>
        </td>
        <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
          Ademeyi@gmail
        </td>
        <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-green font-medium">
          <div className="rounded-lg text-center font-semibold px-4 bg-green-300 text-green-400 bg-opacity-10 py-1">
            viewer
          </div>
        </td>
        <td className="text-sm px-3 py-3  leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
          Thu, Jul 16th 2020 10:29pm
        </td>
        <td className="text-sm px-3 py-3 flex justify-center
         items-center leading-5 text-center whitespace-nowrap text-bizz-black-100 font-medium">
          <div className="rounded-md justify-center unded-md border border-gray-400 text-center  px-4 bg-opacity-10 py-2">
            View Activity
          </div>
            <i className= "ml-3 fa fa-ellipsis-v" aria-hidden="true"></i>
            <div></div>
        </td>
      </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Table;
