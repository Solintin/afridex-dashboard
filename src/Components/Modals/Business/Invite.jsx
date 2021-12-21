import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import InviteSucess from "./InviteSucess"
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

export default function CustomizedDialogs({openUser, handleCloseUser}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
      <BootstrapDialog
        onClose={handleCloseUser}
        aria-labelledby="customized-dialog-title"
        open={openUser}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleCloseUser}
        >
        Invite User
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="p-4">
        
       

            <span className="text-gray-400  text-xs mb-6 uppercase">
              Email Address
            </span>
            <div className="w-full flex items-center mb-6">
              <input
                type="email"
                placeholder="
            felix@gmail.com"
                className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
              />
            </div>
            <span className="text-gray-400  text-xs mb-6 uppercase">
            Full Name
            </span>
            <div className="w-full flex items-center mb-6">
              <input
                type="text"
                placeholder="Usman Abiola"
                className=" border-2 pl-3  w-full pr-3 py-2  border-afridex-neutral overflow-hidden overflow-ellipsis rounded-xl flex-1 outline-none focus:border-afridex-core"
              />
            </div>
            <span className="text-gray-400  text-xs mb-6 uppercase">
     Role
            </span>
            <select name="" id="" className="bg-white rounded-md h-10 w-full border-2 mb-4 border-gray-300">
            <option value="usd">Super Admin</option>
            <option value="usd">Manager</option>
            <option value="usd">Admin</option>
          </select>

           
           
            <a href="/">
            <button onClick={handleClickOpen}  className="w-full p-3 rounded-md text-white font-bold m4-8 bg-afridex-core">
            Send Invite
            </button></a>
          </div>
        </DialogContent>
      </BootstrapDialog>
      <InviteSucess open={open} handleClose={handleClose} />

    </div>
  );
}
