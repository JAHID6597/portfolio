import React, { useEffect } from "react";
import lottie from "lottie-web";
import contactLottie from "../../../assets/lottie/contact-lottie.json";
import { Box } from "@mui/material";

const ContactImage = () => {
	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#contactLottie"),
			animationData: contactLottie
		});
	}, []);

	return (
		<Box id="contactLottie" sx={{ height: { md: "100vh", xs: "50vh" } }} />
	);
};

export default ContactImage;
