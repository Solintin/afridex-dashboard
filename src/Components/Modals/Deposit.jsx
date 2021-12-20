import * as React from "react";
import { useRef } from "react";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import QRCode from "../../assets/images/QRCode.svg";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ open, handleClose }) {
  const copyText = useRef("");
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText.current.innerHTML).then(
      function () {
        alert("Address Copied");
      },
      function () {
        alert("Copying Failed");
      }
    );
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Deposit USDT
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="p-4">
            <div className="grid place-content-center my-5">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="80" height="80" rx="40" fill="#0F92BF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M47 33H33C31.8954 33 31 33.8954 31 35V45C31 46.1046 31.8954 47 33 47H47C48.1046 47 49 46.1046 49 45V35C49 33.8954 48.1046 33 47 33ZM33 31C30.7909 31 29 32.7909 29 35V45C29 47.2091 30.7909 49 33 49H47C49.2091 49 51 47.2091 51 45V35C51 32.7909 49.2091 31 47 31H33Z"
                  fill="#FCFCFD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41 40C41 37.2386 43.2386 35 46 35H50C50.5523 35 51 35.4477 51 36C51 36.5523 50.5523 37 50 37H46C44.3431 37 43 38.3431 43 40C43 41.6569 44.3431 43 46 43H50C50.5523 43 51 43.4477 51 44C51 44.5523 50.5523 45 50 45H46C43.2386 45 41 42.7614 41 40Z"
                  fill="#FCFCFD"
                />
                <path
                  d="M47 40C47 40.5523 46.5523 41 46 41C45.4477 41 45 40.5523 45 40C45 39.4477 45.4477 39 46 39C46.5523 39 47 39.4477 47 40Z"
                  fill="#FCFCFD"
                />
              </svg>
            </div>

            <div className="p-2 bg-gray-200 rounded-sm shadow-md grid lg:grid-cols-2 gap-8">
              <div className="flex ">
                <div className="mt-1 bg-green-600 rounded-full w-3 h-3 mr-2"></div>
                <span>Total Balance</span>
              </div>
              <div className="text-right">
                <h1>10075.56213968 USDT</h1>
                <h1>$10,095.35</h1>
              </div>
            </div>

            <div className="mt-6 text-center text-xl font-semibold">Address</div>
            <div className="my-6 text-gray-500 text-center">
              Only send USDT to this address. Sending any other asset to this
              address may result in the loss of your deposit!
            </div>

            <div className="p-2 bg-gray-200 flex justify-between rounded-md shadow-md">
              <div  ref={copyText} >0xf8aaa2b1842e796191e736434479</div>
              <div className="cursor-pointer" onClick={handleCopy}>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 20C12.2614 20 14.5 17.7614 14.5 15C14.5 12.2386 12.2614 10 9.5 10C6.73858 10 4.5 12.2386 4.5 15C4.5 17.7614 6.73858 20 9.5 20ZM9.5 22C13.366 22 16.5 18.866 16.5 15C16.5 11.134 13.366 8 9.5 8C5.63401 8 2.5 11.134 2.5 15C2.5 18.866 5.63401 22 9.5 22Z" fill="#777E91"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4996 4C14.0188 4 12.6895 4.6424 11.7725 5.66691C11.4042 6.07844 10.772 6.11346 10.3604 5.74513C9.94891 5.37681 9.91389 4.74461 10.2822 4.33309C11.5625 2.9026 13.4263 2 15.4996 2C19.3656 2 22.4996 5.13401 22.4996 9C22.4996 11.0733 21.597 12.937 20.1665 14.2173C19.755 14.5857 19.1228 14.5507 18.7544 14.1391C18.3861 13.7276 18.4211 13.0954 18.8327 12.7271C19.8572 11.8101 20.4996 10.4807 20.4996 9C20.4996 6.23858 18.261 4 15.4996 4Z" fill="#777E91"/>
              </svg>
              
              </div>
            </div>
            <div className="my-8 grid place-content-center">
              <img src={QRCode} alt="QRcode" />
            </div>
            <h1 className="text-gray-500 text-center">
              USDTTRON deposits are available after 0 network confirmations.
            </h1>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
