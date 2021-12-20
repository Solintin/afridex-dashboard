import * as React from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import BoltIcon from "@mui/icons-material/Bolt";

export default function LeadingClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    width: "100%",
    borderRadius: 4,
    zIndex: 1,
    border: "1px solid white",
    p: 1,
    bgcolor: "white",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Box sx={{ position: "relative" }}>
        <button type="button" onClick={handleClick}>
          <span className="text-lg text-500 mr-2 ">Options</span>
          <span>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </button>
        {open ? (
          <Box sx={styles}>
           {
               !window.location.pathname.includes('transactions') ? ( <button className="mb-1 text-afridex-core hover:bg-afridex-core hover:text-white rounded-lg border border-afridex-core p-2 flex">
               <span className="mx-auto ">
                 <BoltIcon className="hover:text-white transition duration-300"></BoltIcon>
               </span>
             </button>) : ( <select name="" id="" className="bg-transparent outline-none">
             <option value="usd">$USD</option>
             <option value="usd">#NGN</option>
             <option value="usd">%YEN</option>
           </select>)
           }
            <button className="mb-1 text-afridex-core hover:bg-afridex-core hover:text-white rounded-lg border border-afridex-core p-2 flex">
             <a href="/dashboard/settings" className="mx-auto "> <span >
             <i className="fa fa-cog  "></i>
           </span></a>
            </button>
            <button className="mb-1 text-afridex-core hover:bg-afridex-core hover:text-white rounded-lg border border-afridex-core p-2 flex">
              <span className="mx-auto ">
                <i className="fa fa-bell  "></i>
              </span>
            </button>
            <button className="mb-1 text-afridex-core hover:bg-afridex-core hover:text-white rounded-lg border border-afridex-core p-2 flex">
              <span className="mx-auto ">
                <i className="fa fa-user  "></i>
              </span>
            </button>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
