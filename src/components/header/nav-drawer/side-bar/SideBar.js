import React from "react";
import {
	Box,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { customStyle } from "../../styles";
import { navItem } from "../../navItem";
import { Link as LinkS } from "react-scroll";

const SideBar = ({ toggleDrawer }) => {
	return (
		<>
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<LinkS
					to="welcome"
					spy={true}
					smooth={true}
					onClick={toggleDrawer(false)}
					style={{ cursor: "pointer" }}
				>
					<Typography sx={customStyle.logo} variant="h6">
						MD. JAHID HOSSAIN
					</Typography>
				</LinkS>

				<IconButton onClick={toggleDrawer(false)}>
					<Close sx={{ fontSize: 30 }} />
				</IconButton>
			</Toolbar>

			<Box
				role="presentation"
				onClick={toggleDrawer(false)}
				onKeyDown={toggleDrawer(false)}
				sx={{ width: { xs: "80vw", sm: "50vw" } }}
			>
				<List>
					{navItem.map((item) => (
						<LinkS
							to={item.link}
							spy={true}
							key={item.id}
							smooth={true}
						>
							<ListItem button onClick={toggleDrawer(false)}>
								<ListItemIcon>{<item.icon />}</ListItemIcon>
								<ListItemText
									sx={{ textTransform: "uppercase" }}
								>
									{item.name}
								</ListItemText>
							</ListItem>
						</LinkS>
					))}
				</List>
			</Box>
		</>
	);
};

export default SideBar;
