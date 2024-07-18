import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Dialog, DialogTitle, Tooltip } from "@mui/material";


import UserMenu from "./userMenu";
const Header = () => {
  const navigate = useNavigate(); // Hook to get the navigate function
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [variant, setVariant] = useState('solid');

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutOpen = () => {
    setOpenDialog(true);
    handleMenuClose();
  };

  const handelLogoutClose = () => {
    setOpenDialog(false);
  };
  return (
    <header>
      <nav className="flex justify-between items-center bg-gray-100 h-20 px-20 text-xl">
        <div className="flex items-center gap-7">
          <h1 className="text-2xl font-bold  flex-1">
            {/* <Link to="/home" className="text-2xl mb-5 font-bold">
              <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} className="h-12" alt="Logo" />
            </Link> */}
            LOGO
          </h1>
        </div>
        <div className="flex items-center gap-7 rounded-full">
          <div>
            <UserMenu/>
            <Dialog open={openDialog} onClose={handelLogoutClose}>
              <DialogTitle>Logout</DialogTitle>
              <p>Really?</p>
            </Dialog>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
