import React, { useEffect } from "react";
import lottie from "lottie-web";
import welcomeLottie from "../../../assets/lottie/welcome-lottie.json";
import { Box } from "@mui/material";

const WelcomeImage = () => {
	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#welcomeLottie"),
			animationData: welcomeLottie
		});
	}, []);

	return (
		<Box id="welcomeLottie" />
	);
};

export default WelcomeImage;
