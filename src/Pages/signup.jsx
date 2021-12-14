import signLogo from "../assets/images/afridex_left_signup.png";
import Form from "../Components/form";
import { Link } from "react-router-dom";
function signup() {
  return (
    <div className="flex  w-full h-full">
      <div className="w-3/12 fixed">
        <a href="/">
          <img
            src={signLogo}
            alt="afridex_left_signup"
            className=" h-screen w-full"
          />
        </a>
      </div>
      <div className="ml-25pct w-9/12">
        <div className="p-80px text-right">
          <span className="text-afridex-gray text-sm font-bold">
            Got an account?
          </span>
          <span className="text-afridex-core">
            <a href="/login"> sign in into your accout</a>
          </span>
        </div>
        <div className=" flex flex-col mx-auto justify-center  max-w-md ">
          <h1 className=" text-center text-5xl font-bold mb-8">
            Sign up to Afridex
          </h1>
          <span className="mb-3 text-center text-afridex-gray">
            Please ensure you are visiting the correct url.
          </span>
          <div className="mb-8  py-2 mx-10  text-center bg-afridex-neutral rounded-3xl font-bold flex  justify-center">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 11C10.2274 11 8.64844 11.0646 7.35838 11.1466C6.13471 11.2243 5.19379 12.158 5.10597 13.373C5.0435 14.2373 5 15.1481 5 16C5 16.8519 5.0435 17.7627 5.10597 18.627C5.19379 19.842 6.13471 20.7757 7.35838 20.8534C8.64844 20.9354 10.2274 21 12 21C13.7726 21 15.3516 20.9354 16.6416 20.8534C17.8653 20.7757 18.8062 19.842 18.894 18.627C18.9565 17.7627 19 16.8519 19 16C19 15.1481 18.9565 14.2373 18.894 13.373C18.8062 12.158 17.8653 11.2243 16.6416 11.1466C15.3516 11.0646 13.7726 11 12 11ZM7.2315 9.15059C5.01376 9.29156 3.27137 11.0124 3.11117 13.2288C3.04652 14.1234 3 15.085 3 16C3 16.915 3.04652 17.8766 3.11118 18.7712C3.27137 20.9876 5.01376 22.7084 7.23151 22.8494C8.55778 22.9337 10.1795 23 12 23C13.8205 23 15.4422 22.9337 16.7685 22.8494C18.9862 22.7084 20.7286 20.9876 20.8888 18.7712C20.9535 17.8766 21 16.915 21 16C21 15.085 20.9535 14.1234 20.8888 13.2288C20.7286 11.0124 18.9862 9.29156 16.7685 9.15059C15.4422 9.06629 13.8205 9 12 9C10.1795 9 8.55778 9.06629 7.2315 9.15059Z"
                  fill="#00C289"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 16.7324C13.5978 16.3866 14 15.7403 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 15.7403 10.4022 16.3866 11 16.7324V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V16.7324Z"
                  fill="#00C289"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10V6Z"
                  fill="#00C289"
                />
              </svg>
            </span>
            <span className="text-green-400">https:// </span>
            accounts.afridex.com/signup
          </div>

          <Form />
        </div>
      </div>
    </div>
  );
}

export default signup;
