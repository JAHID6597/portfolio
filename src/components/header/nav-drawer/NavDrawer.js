import React from "react";
import { SwipeableDrawer } from "@mui/material";
import SideBar from "./side-bar/SideBar";

const NavDrawer = ({ toggleSideBar, toggleDrawer }) => {
	return (
		<SwipeableDrawer
			sx={{ display: { md: "none" } }}
			anchor="left"
			open={toggleSideBar}
			onClose={toggleDrawer(false)}
			onOpen={toggleDrawer(true)}
		>
			<SideBar toggleDrawer={toggleDrawer} />
		</SwipeableDrawer>
	);
};

export default NavDrawer;
