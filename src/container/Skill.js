import React from "react";
import { Grid, Box, Grow } from "@mui/material";
import SkillImage from "../components/skill/skill-img/SkillImage";
import SkillText from "../components/skill/skill-text/SkillText";
import Zoom from "react-reveal/Zoom";
import { Element } from "react-scroll";

const Welcome = () => {
	return (
		<Element name="skill">
			<Grow in>
				<Grid
					container
					sx={{
						minHeight: { md: "100vh", xs: '50vh' },
						display: "flex",
						flexDirection: { md: "row", xs: "column-reverse" }
					}}
				>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Zoom left>
							<Box>
								<SkillImage />
							</Box>
						</Zoom>
					</Grid>

					<Grid item xs={12} md={6}>
						<Zoom right>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="center"
								flexDirection="column"
							>
								<SkillText />
							</Box>
						</Zoom>
					</Grid>
				</Grid>
			</Grow>
		</Element>
	);
};

export default Welcome;
