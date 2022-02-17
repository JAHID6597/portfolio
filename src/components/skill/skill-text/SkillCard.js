import React from "react";
import { Box, Typography } from "@mui/material";

const SkillCard = ({ skill }) => {
	return (
		<Box
			sx={{
				p: 3,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column"
			}}
		>
			<Box><img src={skill.img} alt={skill.name} /></Box>
			
            <Box><Typography variant="p">{skill.name}</Typography></Box>

		</Box>
	);
};

export default SkillCard;
