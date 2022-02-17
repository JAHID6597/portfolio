import React, { useState } from "react";
import useWindowSize from "../../hook/useWindowSize";
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Toolbar,
	Typography
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import NavDrawer from "./nav-drawer/NavDrawer";
import { customStyle } from "./styles";
import { useScrollTrigger } from "@mui/material";
import HideOnScroll from "./HideOnScroll ";
import { Link as LinkS } from "react-scroll";
import { navItem } from "./navItem";

const Header = () => {
	const trigger = useScrollTrigger({ disableHysteresis: true });

	const size = useWindowSize();

	const [toggleSideBar, setToggleSideBar] = useState(false);

	const toggleDrawer = (action) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		)
			return;

		setToggleSideBar(action);
	};

	return (
		<>
			<HideOnScroll>
				<AppBar
					color="transparent"
					sx={{ py: 1, bgcolor: trigger ? "white" : "transparent" }}
					elevation={trigger ? 3 : 0}
				>
					<Toolbar>
						<LinkS
							to="welcome"
							spy={true}
							smooth={true}
							style={{ cursor: "pointer" }}
						>
							<Typography
								sx={customStyle.logo}
								variant={
									size.width > 450
										? "h4"
										: size.width <= 450 && size.width >= 400
										? "h5"
										: "h6"
								}
							>
								MD. JAHID HOSSAIN
							</Typography>
						</LinkS>

						<Box ml="auto" fontSizeLarge>
							<Box sx={{ display: { md: "none" } }}>
								<IconButton
									color="inherit"
									onClick={toggleDrawer(true)}
								>
									<Menu
										sx={{ fontSize: { sm: 40, xs: 35 } }}
									/>
								</IconButton>
							</Box>

							<NavDrawer
								toggleSideBar={toggleSideBar}
								setToggleSideBar={setToggleSideBar}
								toggleDrawer={toggleDrawer}
							/>

							<Box sx={{ display: { xs: "none", md: "block" } }}>
								{navItem.map((item) => (
									<LinkS
										to={item.link}
										spy={true}
										smooth={true}
										key={item.id}
									>
										<Button
											color="inherit"
											sx={{ fontSize: 20 }}
										>
											{item.name}
										</Button>
									</LinkS>
								))}
							</Box>
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar id="back-to-top-anchor" />
		</>
	);
};

export default Header;
