import { Box, Grid, Grow } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";
import ProficiencyImage from "../components/proficiency/proficiency-image/ProficiencyImage";
import ProficiencyProgress from "../components/proficiency/proficiency-progress/ProficiencyProgress";
import { Element } from "react-scroll";

const Proficiency = () => {
	return (
		<Element name="proficiency">
			<Grow in>
				<Grid
					container
					sx={{ minHeight: { md: "100vh", xs: '50vh' } }}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Grid item xs={12} md={6}>
						<ProficiencyProgress />
					</Grid>
					<Grid item xs={12} md={6}>
						<Fade bottom>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="center"
							>
								<ProficiencyImage />
							</Box>
						</Fade>
					</Grid>
				</Grid>
			</Grow>
		</Element>
	);
};

export default Proficiency;
