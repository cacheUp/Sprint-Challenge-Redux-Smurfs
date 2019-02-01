import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className="head">
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Smurf Options
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink to="/">
          {" "}
          <MenuItem onClick={handleClose}>Village</MenuItem>
        </NavLink>
        <NavLink to="/smurf-form">
          <MenuItem onClick={handleClose}>Smurf Form</MenuItem>
        </NavLink>
      </Menu>
    </div>
  );
}

export default Header;
