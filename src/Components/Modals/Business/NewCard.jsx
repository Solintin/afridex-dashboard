import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import Payment  from "../../../assets/images/Payment.svg"
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
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

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
        New Payment Link
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="p-4">
            <div className="p-3 text-sm my-5 flex items-center text-center bg-afridex-blue-100 rounded-xl ">
                <div className="mr-2">
                <img src={Payment} alt="payment" /></div>
                <div>
                <div className='font-bold text-lg'>Accept Payment In Minutes  </div>
                <div className="text-xs"> Share a link. Get paid. Accept a payment in minutes by sharing a reusable Payment Link.</div>
                </div>
            </div>

       

            <span className="text-gray-400  text-xs mb-6 uppercase">
              Enter Card Name
            </span>
            <div className="w-full flex items-center mb-6">
              <input
                type="text"
                placeholder="
                Flex"
                className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
              />
            </div>
            <span className="text-gray-400  text-xs mb-6 uppercase">
            Amount (USDT)
            </span>
            <div className="w-full flex items-center mb-6">
              <input
                type="text"
                placeholder="Enter Amount"
                className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
              />
            </div>
          

           
           
            <a href="/">
            <button  className="w-full p-3 rounded-md text-white font-bold m4-8 bg-afridex-core">
            Create Card
            </button></a>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
