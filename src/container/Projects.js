import React from "react";
import { Box, Typography } from "@mui/material";
import { Fade } from "react-reveal";
import AllProjects from "../components/projects/AllProjects";
import { Element } from "react-scroll";

const Projects = () => {
	return (
		<Element name="projects">
			<Box sx={{ px: { md: 5, xs: 2 }, py: 10 }}>
				<Fade top>
					<Typography
						variant="h2"
						sx={{
							textAlign: { xs: "center", md: "start" },
							textTransform: "uppercase",
							fontWeight: "bold",
							fontSize: { md: 50, xs: 35 },
							pb: 10
						}}
					>
						Projects
					</Typography>
				</Fade>

				<AllProjects />
			</Box>
		</Element>
	);
};

export default Projects;
