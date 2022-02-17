import React from "react";
import { Grid, Box } from "@mui/material";
import WelcomeImage from "../components/welcome/welcome-img/WelcomeImage";
import WelcomeText from "../components/welcome/welcome-text/WelcomeText";
import { Fade } from "react-reveal";
import { Element } from "react-scroll";

const Welcome = () => {
	return (
		<Element name="welcome">
			<Grid container sx={{ minHeight: { lg: "90vh", xs: "80vh" } }}>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						minHeight: { lg: "90vh", xs: "80vh" }
					}}
				>
					<Fade top>
						<Box>
							<WelcomeText />
						</Box>
					</Fade>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Fade bottom>
						<Box>
							<WelcomeImage />
						</Box>
					</Fade>
				</Grid>
			</Grid>
		</Element>
	);
};

export default Welcome;
