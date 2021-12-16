export default function form() {
  return (
    <div>
      <div className="mx-10 py-8 border-t border-afridex-neutral">
        <span className="font-bold text-xs mb-6 uppercase">Email</span>
        <div className="w-full flex items-center mb-6">
          <input
            type="email"
            placeholder="Email Address"
            className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
          />
        </div>

        <span className="font-bold text-xs mb-6 uppercase">Phone Number</span>
        <div className="w-full flex items-center mb-6">
          <input
            type="tel"
            placeholder="Enter Number"
            className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
          />
        </div>

        <span className="font-bold text-xs mb-6 uppercase">Password</span>
        <div className="w-full   relative flex items-center">
          <input
            type="password"
            placeholder="password"
            className="absolute border-2 pl-3  w-full pr-3 py-2 mt-10 border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
          />
          <div>
            <i className="absolute z-10  text-afridex-gray top-3 right-3 fa fa-eye "></i>
          </div>
        </div>

        <div className="mt-16 w-full">
          <button className="w-full transition duration-300 hover:bg-afridex-core-hover hover:scale-110 p-3 text-base font-bold rounded-md text-center bg-afridex-core text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
