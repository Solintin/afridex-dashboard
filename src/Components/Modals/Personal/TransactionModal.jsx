import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
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
          Transfer to Bank
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="p-4">
            <div className="p-2 text-sm my-6 bg-afridex-blue-100 rounded-lg border  grid grid-cols-2 gap-8">
              <div>Available</div>

              <div className="text-right">10075.56213968 USDT</div>

              <div>Total Balance</div>

              <div className="text-right text-gray-400">
                <h1>$10,095.35</h1>
                <h1>NGN 4,177,052.</h1>
              </div>
            </div>

            <span className="text-gray-400 font-semibold text-xs mb-6 uppercase">
              Select Bank
            </span>
            <div className="w-full flex items-center mb-6">
              <select className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core">
                <option value="">Access Bank</option>
                <option value="">First Bank</option>
                <option value="">GT Bank</option>
                <option value="">UBA Bank</option>
              </select>
            </div>

            <span className="text-gray-400 font-semibold text-xs mb-6 uppercase">
              Enter Accout Number
            </span>
            <div className="w-full flex items-center mb-6">
              <input
                type="text"
                placeholder="00112223345"
                className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
              />
            </div>

            <span className="text-gray-400 font-semibold text-xs mb-6 uppercase">
              Coin
            </span>
            <div className="w-full flex flex-col  mb-6">
              <select className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core">
                <option value="">USDT</option>
                <option value="">ETH</option>
                <option value="">BTC</option>
              </select>
              <div className="text-right text-gray-400 my-4 font-semibold text-xs">
                Fee: 0.0013 USDT
              </div>
            </div>

            <span className="text-gray-400 font-semibold text-xs mb-6 uppercase">
              Amount To to transfer
            </span>
            <div className="w-full flex items-center mb-6">
              <input
                type="text"
                placeholder=""
                className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
              />
            </div>
            <a href="/">
            <button  className="w-full p-3 rounded-md text-white font-bold m4-8 bg-afridex-core">
            Transfer
            </button></a>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
