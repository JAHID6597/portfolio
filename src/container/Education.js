import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Fade } from "react-reveal";
import { educationData } from "../components/education/educationData";
import EducationCard from "../components/education/education-card/EducationCard";
import { Element } from "react-scroll";

const Education = () => {
	const [educationborder, setEducationBorder] = useState({
		id: 0,
		hover: false
	});

	return (
		<Element name="education">
			<Box sx={{ minHeight: "30vh", py: 5 }}>
				<Fade top>
					<Box sx={{ px: { md: 5, xs: 2 }, py: { sm: 5, xs: 10 } }}>
						<Typography
							variant="h2"
							sx={{
								textAlign: { xs: "center", md: "start" },
								textTransform: "uppercase",
								fontWeight: "bold",
								fontSize: { md: 50, xs: 35 }
							}}
						>
							Education
						</Typography>
					</Box>
				</Fade>

				{educationData.map((edu) => (
					<EducationCard
						educationborder={educationborder}
						setEducationBorder={setEducationBorder}
						edu={edu}
					/>
				))}
			</Box>
		</Element>
	);
};

export default Education;
