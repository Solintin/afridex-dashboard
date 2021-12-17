import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResponseModal from './Modals/ResponseModal'
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
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="grid lg:grid-cols-2 gap-6">
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
              <div className=" w-full">
                <button onClick={handleClickOpen} className="px-6 transition duration-300 hover:bg-gray-600 hover:scale-110 p-3 text-base font-medium rounded-md text-center bg-gray-500 text-white">
                  Save Changes
                </button>
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
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="flex flex-col ">
            <div>
              <span className="font-bold text-xs mb-6 uppercase">Current Password</span>
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
            <div className=" w-full">
              <button onClick={handleClickOpen} className="px-6 transition duration-300 hover:bg-gray-600 hover:scale-110 p-3 text-base font-medium rounded-md text-center bg-gray-500 text-white">
                Save Changes
              </button>
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
      </TabPanel>
      </Box>

      <ResponseModal 

      open={open}
      handleClose={handleClose}
      response={ value === 0 ? 'You successfully changed your Profile Details. You can login with the new credential.' :  'You successfully changed your password. You can login with the new credential.'}
      />
    </div>
  );
}
