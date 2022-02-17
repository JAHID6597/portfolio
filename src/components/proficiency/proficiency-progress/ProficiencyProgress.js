import React from "react";
import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { Fade } from "react-reveal";

const proficiencyData = [
	{ id: 1, proficiencyName: "Frontend / Design", progressValue: 85 },
	{ id: 2, proficiencyName: "Backend", progressValue: 75 },
	{ id: 3, proficiencyName: "Programming", progressValue: 65 }
];

const ProficiencyProgress = () => {
	return (
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
					Proficiency
				</Typography>
			</Fade>

			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column"
				}}
			>
				{proficiencyData.map((proficiency) => (
					<Box key={proficiency.id}>
						<Fade left>
							<Typography variant="h5" sx={{ mb: 3 }}>
								{proficiency.proficiencyName}
							</Typography>
							<Box width="100%" sx={{ mb: 7 }}>
								<LinearProgress
									variant="determinate"
									value={proficiency.progressValue}
									sx={{
										height: 15,
										borderRadius: 10,
										"& .MuiLinearProgress-bar": {
											background: "#6600ff"
										}
									}}
								/>
							</Box>
						</Fade>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ProficiencyProgress;
