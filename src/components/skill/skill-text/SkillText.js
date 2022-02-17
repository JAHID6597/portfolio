import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { skillItemData } from "./skillItemData";
import SkillCard from "./SkillCard";

const SkillText = () => {
	return (
		<>
			<Box component="div">
				<Typography
					variant="h2"
					sx={{
						textTransform: "uppercase",
						fontWeight: "bold",
						my: 10,
						fontSize: { md: 50, xs: 35 }
					}}
				>
					Skills
				</Typography>
			</Box>

			<Grid container sx={{ p: 2 }}>
				{skillItemData.map((skill) => (
					<Grid
						item
						xs={4}
						md={3}
						lg={2}
						key={skill.name}
						sx={{
							"&:hover": {
								boxShadow:
									"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
							}
						}}
					>
						<SkillCard skill={skill} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default SkillText;
