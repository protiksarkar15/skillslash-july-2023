import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Avatar, Button } from "@mui/material";
import { setCookie } from "cookies-next";
import LogoutButton from "./LogoutButton";

export default function CustomAppBar({ user }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Instagram
        </Typography>

        <Typography>Hello {user.name}</Typography>
        <Avatar sx={{ bgcolor: "red" }} src={user.avatar}></Avatar>
        <React.Suspense fallback={<div>Loading...</div>}>
            <LogoutButton />
        </React.Suspense>
      </Toolbar>
    </AppBar>
  );
}
