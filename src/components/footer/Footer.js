import React from "react";
import { Box, Grid, Typography, Avatar, Divider } from "@mui/material";
import { Call, Mail, LocationOn } from "@mui/icons-material";
import jahid from "../../assets/images/jahid.jpg";
import SocialMedia from "../social-media/SocialMedia";
import { Fade, Slide, Zoom } from "react-reveal";

const footerData = [
	{ id: 1, icon: Call, text: "+880 1732271677" },
	{ id: 2, icon: Mail, text: "jahid6597@gmail.com" },
	{ id: 3, icon: LocationOn, text: "Chittagong, Bangladesh " }
];

const Footer = () => {
	return (
		<Box
			sx={{
				px: { md: 5, xs: 2 },
				pt: { md: 7, xs: 10 },
				minHeight: "45vh"
			}}
		>
			<Grid container>
				<Grid item xs={12} md={8} sx={{
						display: "flex",
						justifyContent: "center" ,
						flexDirection: 'column',
						minHeight: "45vh"
					}}>
					<Fade top>
						<Typography
							variant="h3"
							sx={{
								py: 5,
								textAlign: { md: "start", xs: "center" },
								fontSize: { md: 50, xs: 40 }
							}}
						>
							MD. JAHID HOSSAIN
						</Typography>

						{footerData.map((data) => (
							<Box sx={{ pb: 2 }} key={data.id}>
								<Typography
									variant="h5"
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: {
											md: "flex-start",
											xs: "center"
										},
										gap: 2,
										fontSize: 20
									}}
								>
									{<data.icon />} {data.text}
								</Typography>
							</Box>
						))}
					</Fade>
				</Grid>

				<Grid
					item
					xs={12}
					md={4}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: { md: "flex-end", xs: "center" },
						minHeight: "45vh"
					}}
				>
					<Fade bottom>
						<Avatar
							alt="jahid"
							src={jahid}
							sx={{
								width: { md: 250, xs: 200 },
								height: { md: 250, xs: 200 },
								border: '8px solid #6600ff'
							}}
						/>
					</Fade>
				</Grid>
			</Grid>

			<Slide left>
				<Divider />
			</Slide>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					p: 2
				}}
			>
				<Zoom bottom>
					<SocialMedia />
				</Zoom>
			</Box>
		</Box>
	);
};

export default Footer;
