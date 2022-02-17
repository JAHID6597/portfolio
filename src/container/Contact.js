import React from "react";
import { Grid, Box } from "@mui/material";
import { Fade } from "react-reveal";
import { Element } from "react-scroll";
import ContactForm from "../components/contact/contact-form/ContactForm";
import ContactImage from "../components/contact/contact-img/ContactImage";

const Contact = () => {
	return (
		<Element name="contact">
			<Grid container sx={{ minHeight: "100vh" }}>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						minHeight: { md: "100vh", xs: "70vh" }
					}}
				>
					<Fade top>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="center"
							bgColor="primary"
							sx={{ height: { md: "50vh" } }}
						>
                            <ContactImage />
                        </Box>
					</Fade>
				</Grid>
				<Grid item xs={12} md={6}>
					<Fade bottom>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="center"
							bgColor="primary"
							sx={{ height: { md: "90vh" } }}
						>
							<ContactForm />
						</Box>
					</Fade>
				</Grid>
			</Grid>
		</Element>
	);
};

export default Contact;
