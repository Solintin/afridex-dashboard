import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Exchange from "../../../assets/images/Exchange.svg";
import SuccessDialog from "./SuccessDialog"
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
    const [openSucess, setOpenSuccess] = React.useState(false);

    const handleClickOpenSuccess = () => {
      setOpenSuccess(true);
    };
    const handleCloseSuccess = () => {
      setOpenSuccess(false);
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
          Confirm Transaction
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="p-4">
            You are gettings
            <div className="mt-4 mb-8 flex justify-between">
              <div className="font-bold"> $50 </div>
              <div className="">
                <img src={Exchange} alt="exchange" />
              </div>
            </div>
            <div className="flex justify-between">
              <div>You are Paying</div>
              <div>Fees</div>
            </div>
            <div className="my-4 flex justify-between">
              <div className="font-bold text-2xl text-afridex-core"> #120000 </div>
              <div className="">#50</div>
            </div>
            <div className="w-full h-3 rounded-lg bg-gray-400"></div>
            <div className="my-3 space-x-3 flex justify-center items-center ">
              <span>
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7615 6.39098C10.9667 6.39098 11.1469 6.24637 11.1746 6.04654C11.2051 5.83094 11.219 5.60745 11.219 5.38658C11.219 5.16835 11.0332 4.99219 10.8031 4.99219C10.573 4.99219 10.3873 5.16835 10.3873 5.38658C10.3873 5.57326 10.3734 5.75995 10.3484 5.944C10.3179 6.1596 10.4787 6.3568 10.7061 6.38572C10.7255 6.38835 10.7449 6.39098 10.7615 6.39098Z"
                    fill="#06CA98"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.68411 11.497H4.3731C4.21812 11.497 4.09362 11.6296 4.09362 11.7826C4.09362 11.9356 4.21812 12.0631 4.3731 12.0631H8.30613C8.33153 12.0631 8.35694 12.0656 8.38235 12.0707C8.92098 12.109 9.34782 12.5577 9.34782 13.1085C9.34782 13.6847 8.88033 14.1539 8.30613 14.1539H7.80307C7.72938 14.8984 7.10183 15.4823 6.33961 15.4823C5.5774 15.4823 4.94984 14.8984 4.87616 14.1513H4.3731C3.7989 14.1513 3.33141 13.6822 3.33141 13.1059C3.33141 12.8535 3.42542 12.624 3.57532 12.443C3.42542 12.262 3.33141 12.0325 3.33141 11.7801C3.33141 11.4027 3.53213 11.0738 3.83193 10.8902C3.68457 10.0819 3.31616 9.34246 2.75721 8.74581C1.79936 7.7259 1.3217 6.33372 1.4462 4.93134C1.652 2.60594 3.47369 0.734404 5.78066 0.476876C7.6989 0.262694 9.51551 1.15002 10.5191 2.78953C10.6283 2.96801 10.575 3.20514 10.3946 3.31478C10.2167 3.42442 9.98046 3.37088 9.87121 3.18984C9.01753 1.80276 7.47785 1.05313 5.85942 1.23416C3.91323 1.45089 2.37356 3.03176 2.20079 4.99509C2.09662 6.19858 2.48789 7.34343 3.30854 8.21801C3.96405 8.9192 4.40105 9.78357 4.57636 10.7295H5.28522C5.20391 9.62804 4.81264 8.52908 4.61193 7.97068L4.60782 7.95913C4.47144 7.57594 4.43446 7.47201 4.47219 7.32559C4.51538 7.1573 4.66782 7.03746 4.84313 7.03746H7.83609C8.0114 7.03746 8.16385 7.1573 8.20704 7.32814C8.24487 7.47495 8.20759 7.57905 8.07031 7.96226L8.0673 7.97068C7.86658 8.52908 7.47277 9.62804 7.39401 10.7321H8.10287C8.27564 9.81162 8.72534 8.9294 9.41134 8.17466C9.62984 7.93498 9.82039 7.66726 9.97792 7.38168C10.0795 7.19555 10.3133 7.12925 10.4962 7.23124C10.6817 7.33324 10.7478 7.56527 10.6461 7.7514C10.4607 8.08797 10.2345 8.40414 9.97538 8.68972C9.36052 9.36286 8.96671 10.1507 8.83459 10.9667L8.80157 11.1758C8.77108 11.3619 8.61355 11.497 8.42554 11.497H8.30867H6.99766H5.68411ZM7.31579 7.80484H5.36453C5.58811 8.42954 5.97684 9.56164 6.05052 10.732H6.62726C6.70348 9.56419 7.09221 8.42954 7.31579 7.80484ZM6.34041 14.7163C5.99995 14.7163 5.71539 14.4741 5.64679 14.1528H7.03148C6.96542 14.4741 6.68086 14.7163 6.34041 14.7163ZM8.58491 13.1059C8.58491 12.9529 8.46041 12.8254 8.30543 12.8254H4.36986C4.21742 12.8254 4.09039 12.9529 4.09039 13.1059C4.09039 13.2589 4.21488 13.3864 4.36986 13.3864H5.24895H7.42634H8.30543C8.45787 13.3864 8.58491 13.2589 8.58491 13.1059ZM2.21337 1.83331C2.22676 1.82372 2.2387 1.81123 2.25029 1.79912L2.26165 1.78741C2.53605 1.47124 2.37852 1.25706 2.29976 1.18057C2.21846 1.10407 1.99741 0.953636 1.69761 1.24431C1.39526 1.53499 1.535 1.76192 1.60868 1.84606C1.65188 1.89705 1.74334 1.9761 1.88054 1.9761C1.96947 1.9761 2.08126 1.9404 2.21337 1.83331ZM2.24157 1.74893C2.28985 1.63674 2.29747 1.47355 2.17806 1.33841L2.04086 1.46335L2.24157 1.74893Z"
                    fill="#06CA98"
                  />
                  <path
                    d="M2.18472 9.61014C2.33336 9.46556 2.3408 9.22459 2.20206 9.0724C1.17147 7.95126 0.658647 6.42429 0.792426 4.88463C0.841974 4.31899 0.975753 3.7711 1.19376 3.24858C1.27552 3.05581 1.18633 2.83259 0.99805 2.74889C0.809768 2.66518 0.591757 2.7565 0.510003 2.94927C0.262264 3.54282 0.108666 4.17187 0.0516856 4.81614C-0.0994354 6.5714 0.487707 8.31145 1.66199 9.59238C1.73631 9.67102 1.83293 9.7116 1.93203 9.7116C2.02121 9.71414 2.11288 9.68116 2.18472 9.61014Z"
                    fill="#06CA98"
                  />
                </svg>
              </span>

              <span>
                You will get your voucher code via your registered email
              </span>

              </div>
              <button  onClick={handleClickOpenSuccess} className="w-full p-3 rounded-md text-white font-bold my-8 bg-afridex-core">
                Pay N25,050.00
              </button>
          </div>
        </DialogContent>

      </BootstrapDialog>

      <SuccessDialog 
      open={openSucess} 
      handleClose={handleCloseSuccess}
      />
    </div>
  );
}
