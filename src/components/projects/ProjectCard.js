import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { RedirectNewPage } from "../../services/RedirectNewPage";

const ProjectCard = ({ project }) => {
	return (
		<>
			<Box
				className="direction-reveal__card"
				sx={{
					height: { md: "30vh", xs: "25vh" },
					width: "100%",
					overflow: "hidden"
				}}
			>
				<img
					src={project.img}
					alt={project.id}
					className="direction-reveal__img"
					sx={{
						maxHeight: "100%",
						maxWidth: "100%",
						margin: "auto",
						display: "block",
						objectFit: "cover"
					}}
				/>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
					className="direction-reveal__overlay direction-reveal__anim--enter"
				>
					<Box className="direction-reveal__title">
						{project.demo && (
							<Button
								sx={{
									color: "white",
									fontSize: { md: 25, xs: 20 }
								}}
								size="large"
								onClick={() => RedirectNewPage(project.demo)}
							>
								Demo
							</Button>
						)}
						{project.code && (
							<Button
								sx={{
									color: "white",
									fontSize: { md: 25, xs: 20 }
								}}
								size="large"
								onClick={() => RedirectNewPage(project.code)}
							>
								Code
							</Button>
						)}
						{project.client && (
							<Button
								sx={{
									color: "white",
									fontSize: { md: 25, xs: 20 }
								}}
								size="large"
								onClick={() => RedirectNewPage(project.client)}
							>
								Client
							</Button>
						)}
						{project.server && (
							<Button
								sx={{
									color: "white",
									fontSize: { md: 25, xs: 20 }
								}}
								size="large"
								onClick={() => RedirectNewPage(project.server)}
							>
								Server
							</Button>
						)}
					</Box>
				</Box>
			</Box>
			<Box>
				<Typography
					variant="h3"
					sx={{
						fontSize: 20,
						textTransform: "uppercase",
						textAlign: "center"
					}}
				>
					{project.projectName}
				</Typography>
			</Box>
		</>
	);
};

export default ProjectCard;
