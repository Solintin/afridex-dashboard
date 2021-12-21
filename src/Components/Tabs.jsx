import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResponseModal from "./Modals/Personal/ResponseModal";
import UserTable from "./Tables/UserTable";
import Alert from "./Alert";
import Invite from "../Components/Modals/Business/Invite";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openUser, setOpenUser] = React.useState(false);

  const handleClickOpenUser = () => {
    setOpenUser(true);
  };
  const handleCloseUser = () => {
    setOpenUser(false);
  };

  const [openNotify, setOpenNotify] = React.useState(false);

  const copyText = React.useRef("");
  const copyText1 = React.useRef("");
  const copyText2 = React.useRef("");
  const copyText3 = React.useRef("");
  const handleCopy = (location) => {
    let copiedValue = '';

   
  if(location === 'add'){
    copiedValue = copyText.current.innerHTML
  }
  else if(location === 'add1'){
    copiedValue = copyText1.current.innerHTML
  }
  else if(location === 'add2'){
    copiedValue = copyText2.current.innerHTML
  }
  else {
    copiedValue = copyText3.current.innerHTML
  }

    navigator.clipboard.writeText(copiedValue).then(
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
    <div className="bg-white p-5 rounded-xl shadow-lg">
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Profile Details" {...a11yProps(0)} />
            <Tab label="password" {...a11yProps(1)} />

            <Tab label="Users" {...a11yProps(2)} />
            <Tab label="API and Web Hooks" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="grid lg:grid-cols-2 lg:gap-6">
            <div className="flex flex-col ">
              <div>
                <span className="font-bold text-xs mb-6 uppercase">Email</span>
                <div className="w-full flex items-center mb-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
                  />
                </div>
              </div>
              <div>
                <span className="font-bold text-xs mb-6 uppercase">
                  Phone Number
                </span>
                <div className="w-full flex items-center mb-6">
                  <input
                    type="tel"
                    placeholder="0912345678"
                    className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="font-bold text-xs mb-6 uppercase">
                Full Name
              </span>
              <div className="w-full flex items-center mb-6">
                <input
                  type="email"
                  placeholder="Usman Abiola"
                  className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
                />
              </div>
            </div>
          </div>
          <div className=" w-full">
            <button
              onClick={handleClickOpen}
              className="px-6 transition duration-300 hover:bg-gray-600 hover:scale-110 p-3 text-base font-medium rounded-md text-center bg-gray-500 text-white"
            >
              Save Changes
            </button>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className="grid lg:grid-cols-2 lg:gap-6">
            <div className="flex flex-col ">
              <div>
                <span className="font-bold text-xs mb-6 uppercase">
                  Current Password
                </span>
                <div className="w-full flex items-center mb-6">
                  <input
                    type="password"
                    placeholder="*************"
                    className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
                  />
                </div>
              </div>
              <div>
                <span className="font-bold text-xs mb-6 uppercase">
                  New Password
                </span>
                <div className="w-full flex items-center mb-6">
                  <input
                    type="password"
                    placeholder="*************"
                    className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="font-bold text-xs mb-6 uppercase">
                Confirm Password
              </span>
              <div className="w-full flex items-center mb-6">
                <input
                  type="password"
                  placeholder="*************"
                  className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
                />
              </div>
            </div>
          </div>
          <div className=" w-full">
            <button
              onClick={handleClickOpen}
              className="px-6 transition duration-300 hover:bg-gray-600 hover:scale-110 p-3 text-base font-medium rounded-md text-center bg-gray-500 text-white"
            >
              Save Changes
            </button>
          </div>
        </TabPanel>

        {window.location.pathname.includes("/business") && (
          <>
            <TabPanel value={value} index={2}>
              <>
                <div className="font-bold mb-3 text-lg">Users</div>
                <div className="text-gray-500 mb-7 ">
                  Track the activities of all team members
                </div>

                <div className="flex justify-between">
                  <div className=" space-x-4 flex justify-between">
                    <div>
                      <select
                        name=""
                        id=""
                        className="bg-white rounded-md h-10 w-28 border  border-gray-300"
                      >
                        <option value="usd">Filter</option>
                        <option value="usd">Filter</option>
                        <option value="usd">Filter</option>
                      </select>
                    </div>

                    <div className="w-full relative ">
                      <div>
                        <i className="absolute z-10 top-4 left-3  text-afridex-gray fa fa-search mr-2 "></i>
                      </div>
                      <input
                        type="text"
                        placeholder="Search.."
                        className="absolute w-60 border-2 pl-8  pr-3 py-2 border-afridex-neutral overflow-hidden overflow-ellipsis rounded-md flex-1 outline-none focus:border-afridex-core"
                      />
                    </div>
                  </div>

                  <button onClick={handleClickOpenUser} className=" bg-afridex-core text-white rounded-lg px-6 py-2 flex">
                    <span className="mr-2">
                      <i className="fa fa-plus"></i>
                    </span>
                    <span>Add User</span>
                  </button>
                </div>
                <UserTable />
              </>
            </TabPanel>

            <TabPanel value={value} index={3}>
              <div className="font-bold mb-1 text-base">API Keys</div>
              <div className="text-gray-500 text-sm mb-12 ">
                The Webhooks API uses API keys from your developer account,
                which are located on the API Credentials page
              </div>

              <div className="font-bold mb-3 text-xs">Public Key</div>
              <div className="mb-7 p-2 text-gray-500 border-2 border-gray-300 rounded-md flex justify-between">
                <div
                  ref={copyText}
                  className="text-ellipsis overflow-hidden  truncate mr-5"
                >
                  bc1qqnyq7yyse6cq3pkrrhr325l4ma4c4sc5m59yyvbc1qqnyq7yyse6cq3pkrrhr325l4ma4c4sc5m59yyv
                </div>
                <div
                  onClick={  () => {handleCopy('add')} }
                  className="cursor-pointer hover:bg-afridex-core hover:text-white px-3 rounded-xl border flex justify-center items-center"
                >
                  <i className="far fa-clone mr-2 py-1"></i> Copy
                </div>
              </div>

              <div className="font-bold mb-3 text-xs">Secret Key</div>
              <div className="mb-7 p-2 text-gray-500 border-2 border-gray-300 rounded-md flex justify-between">
                <div
                  ref={copyText1}
                  className="text-ellipsis overflow-hidden  truncate mr-5"
                >
                  bc1qqnyq7yyse6cq3pkrrhr325l4ma4c4sc5m59yyvbc1qqnyq7yyse6cq3pkrrhr325l4ma4c4sc5m59yyv
                </div>
                <div
                  onClick={() => {handleCopy('add1')}}
                  className="cursor-pointer hover:bg-afridex-core hover:text-white px-3 rounded-xl border flex justify-center items-center"
                >
                  <i className="far fa-clone mr-2"></i> Copy
                </div>
              </div>

              <div className="font-bold mb-3 text-base">Webhook Keys</div>
              <div className="text-gray-500 text-sm mb-7 ">
                The Webhooks API uses API keys from your developer account,
                which are located on the API Credentials page
              </div>

              <div className="font-bold mb-3 text-xs">URL</div>
              <div className="mb-7 text-gray-500 border-2 p-2 border-gray-300 rounded-md flex justify-between">
                <div ref={copyText2}>api.afridex.org </div>
                <div
                  onClick={() => {handleCopy('add2')}}
                  className="cursor-pointer hover:bg-afridex-core hover:text-white px-3 rounded-xl border flex justify-center items-center"
                >
                  <i className="far fa-clone mr-2"></i> Copy
                </div>
              </div>

              <div className="font-bold mb-3 text-xs">Secret Hash</div>
              <div className="mb-7 text-gray-500 border-2 p-2 border-gray-300 rounded-md flex justify-between">
                <div ref={copyText3} className="  truncate mr-5 ">
                  bc1qqnyq7yyse6cq3pkrrhr325l4ma4c4sc5m59yyvbc1qqnyq7yyse6cq3pkrrhr325l4ma4c4sc5m59yyv
                </div>
                <div
                  onClick={handleCopy}
                  className="cursor-pointer hover:bg-afridex-core hover:text-white px-3 rounded-xl border flex justify-center items-center"
                >
                  <i className="far fa-clone mr-2"></i> Copy
                </div>
              </div>
            </TabPanel>
          </>
        )}
      </Box>
      <Alert
        message={"Content Copied"}
        type={"success"}
        open={openNotify}
        handleCloseNotification={handleCloseNotification}
      />
      <ResponseModal
        open={open}
        handleClose={handleClose}
        response={
          value === 0
            ? "You successfully changed your Profile Details. You can login with the new credential."
            : "You successfully changed your password. You can login with the new credential."
        } />
      <Invite
        openUser={openUser}
        handleCloseUser={handleCloseUser}
        
      />
    </div>
  );
}
