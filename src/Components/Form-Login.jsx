export default function FormLogin() {
    return (
      <div>
        <div className="mx-10 py-8 border-t border-afridex-neutral">
          <span className="font-bold text-xs mb-6 uppercase">Email</span>
          <div className="w-full  mb-10 p-3  border-2 border-afridex-neutral   rounded-xl">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full   outline-none"
            />
          </div>
          <span className="font-bold text-xs mb-6 uppercase">Password</span>
        <div className="w-full  mb-10 p-3  border-2 border-afridex-neutral   rounded-xl flex items-center">
          <input
            type="password"
            placeholder="password"
            className="flex-1   outline-none"
          />
          <div>
            {" "}
            <i className="fa fa-eye "></i>{" "}
          </div>
        </div>
      
          <div className="my-6 text-right font-bold text-xs text-red-400">  <a href="/"> Forgot Password? </a></div>
  
          <div className="w-full">
            <button className="w-full transition duration-300 hover:bg-afridex-core-hover hover:scale-110 p-3 text-base font-bold rounded-md text-center bg-afridex-core text-white">
             Login
            </button>
          </div>
        </div>
      </div>
    );
  }
  