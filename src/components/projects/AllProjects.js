import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Zoom } from "react-reveal";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";
import DirectionReveal from "direction-reveal";
import directionRevealOptions from "../../config/lib/directionRevealOptions";

const AllProjects = () => {
	useEffect(() => DirectionReveal(directionRevealOptions));

	return (
		<Box className="direction-reveal direction-reveal--demo-roll-out">
			<Grid
				container
				sx={{
					display: "flex",
				}}
                spacing={3}
			>
				{projectData.map((project) => (
					<Grid
						item
						xs={12}
						sm={6}
						lg={4}
						
						key={project.id}
					>
						<Zoom top>
							<ProjectCard project={project} />
						</Zoom>
					</Grid>
				))}
                
			</Grid>
		</Box>
	);
};

export default AllProjects;
