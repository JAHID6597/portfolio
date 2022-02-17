import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { customStyle } from "./styles";
import { Slide } from "react-reveal";

const EducationCard = ({ educationborder, setEducationBorder, edu }) => {
	return (
		<Slide left>
			<Box
				sx={customStyle.educationCard}
				onMouseOver={() =>
					setEducationBorder({ id: edu.id, hover: true })
				}
				onMouseOut={() =>
					setEducationBorder({ id: edu.id, hover: false })
				}
			>
				<Box>
					<img src={edu.logo} alt="IIUC" width="100" height="100" />
				</Box>

				<Box sx={customStyle.educationCardText}>
					<Typography
						variant="h5"
						sx={customStyle.educationCardInstitution}
					>
						{edu.institution}
					</Typography>
					<Typography
						variant="h6"
						sx={customStyle.educationCardDegree}
					>
						{edu.degree}
					</Typography>
					<Typography variant="h6" sx={customStyle.educationCardYear}>
						{edu.year}
					</Typography>
				</Box>
			</Box>

			<Box sx={customStyle.educationCardBorderContainer}>
				<Divider
					sx={customStyle.educationCardBorder(
						educationborder.id,
						edu.id,
						educationborder.hover
					)}
				/>
			</Box>
		</Slide>
	);
};

export default EducationCard;
