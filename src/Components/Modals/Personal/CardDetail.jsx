import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MasterCard from "../../../assets/images/mastercard.svg";
import ResponseModal from './ResponseModal'

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

export default function CustomizedDialogs({ open, handleClose}) {
    const [openModal, setOpenModal] = React.useState(false);
    const [status, setStatus] = React.useState(null);

    const handleClickOpenModal = (id) => {
      setStatus(id)
      setOpenModal(true);
    };
    const handleCloseModal = () => {
      setOpenModal(false);
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
          Card Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="p-4">
            <div className="grid place-content-center my-5">
              <img src={MasterCard} alt="mastercard" />
            </div>

            <div className="p-2 w-full bg-afridex-neutral rounded-sm shadow-md grid grid-cols-2 gap-8">
              <div className="flex ">
                <div className="mt-1 bg-green-600 rounded-full w-3 h-3 mr-2"></div>
                <span>Card Number</span>
              </div>
              <div className="text-right">
                <h1>381693003417361716</h1>
                <h1>Amusat Usman</h1>
              </div>
              <div className="flex ">
                <div className="mt-1 bg-green-600 rounded-full w-3 h-3 mr-2"></div>
                <span>Expiring Date</span>
              </div>
              <div className="text-right">
                <h1>01/23</h1>
              </div>
              <div className="flex ">
                <div className="mt-1 bg-green-600 rounded-full w-3 h-3 mr-2"></div>
                <span>CVV</span>
              </div>
              <div className="text-right">
                <h1>183</h1>
              </div>
            </div>

            <div className="mt-6 text-center text-xl font-semibold">
              Billig Address
            </div>
            <div className="my-6 text-gray-500 text-center">
              Block 6,1B Mobolaji Johnson estate Lagos LA 100001
            </div>
            <a href="/business/payments/details">
            <div className="p-2 bg-gray-200 flex justify-center  cursor-pointer items-center rounded-md shadow-md">
              <div className="mr-2 ">View Transactions</div>
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66699 6.83333H13.3337M13.3337 6.83333L7.50033 1M13.3337 6.83333L7.50033 12.6667"
                    stroke="#667085"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            </a>
            </div>
          <div className="my-8 grid grid-cols-2 gap-6 place-content-center">
            <div>
              <button onClick={()=> { handleClickOpenModal(0)} } className="w-full bg-afridex-gray-400 rounded-md p-2 text-xl text-white">
                Freeze
              </button>
            </div>
            <div>
              <button onClick={()=> { handleClickOpenModal(1)} } className="w-full bg-red-400 p-2 rounded-md text-xl text-white">
                Delete Card
              </button>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>

      <ResponseModal
      open={openModal}
      handleClose={handleCloseModal}
      response={status === 0 ? 'Card Frozen Successfully' :  'Card Deleted Successfully'}
      />
    </div>
  );
}
