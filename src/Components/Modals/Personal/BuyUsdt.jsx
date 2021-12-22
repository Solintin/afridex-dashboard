import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Exchange from "../../../assets/images/Exchange.svg";
import ConfirmTransaction from "./ConfirmExchange"

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

  const [openConfirm, setOpenConfirm] = React.useState(false);

  const handleClickOpenConfirm = () => {
    setOpenConfirm(true);

  };
  const handleCloseConfirm = () => {
    setOpenConfirm(false);
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
          Fund Wallet 
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="p-4">
            <div className="p-2 w-full  place-content-center grid lg:grid-cols-2 gap-8">
              {[...Array(6)].map((i, idx) => {
                return (
                  <div
                  onClick={handleClickOpenConfirm}
                    key={idx}
                    className=" cursor-pointer p-2 h-40 w-40 space-y-5 shadow-md border  grid place-content-center rounded-2xl"
                  >
                    <div>
                      <img src={Exchange} alt="Exchange" />
                    </div>
                    <div className="text-black font-medium">$20</div>
                    <div className="text-gray-500">$1000</div>
                  </div>
                );
              })}
            </div>
          </div>
        </DialogContent>
        <ConfirmTransaction open={openConfirm} 
        handleClose={handleCloseConfirm} />

      </BootstrapDialog>
    </div>
  );
}
