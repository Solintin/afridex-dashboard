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


        ><h1>Done</h1></BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="p-4">
            <h1 className="text-5xl text-center text-black mt-3 mb-7">
              {" "}
              Success! 🎉
            </h1>
            <div className="text-center text-xl mb-5">
              You successfully funded your wallet with{" "}
              <span className="text-green-600">$100.00 USD</span> from Afridex
            </div>

            <div className="border shadow-xl rounded-lg p-4 grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-4">
                <div>status</div>
                <div className="text-green-600 text-lg font-medium">
                  Completed
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div>Fee</div>
                <div>$0.50</div>
              </div>
            </div>

           <a href="/">
           <button  className="w-full p-3 rounded-md text-white font-bold my-8 bg-afridex-core">
           Go Home
           </button></a>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  ); 
}
