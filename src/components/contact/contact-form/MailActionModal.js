import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import lottie from "lottie-web";
import successLottie from "../../../assets/lottie/success-lottie.json";
import warningLottie from "../../../assets/lottie/warning-lottie.json";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	outline: "none",
	width: 400,
	bgcolor: "background.paper",
	p: 4
};

const MailActionModal = ({ isSuccessMailSent }) => {
	useEffect(() => {
		const mailActionLottie = document.querySelector("#mailActionLottie");
		mailActionLottie.textContent = '';

		let animationData = successLottie;
		if(!isSuccessMailSent) animationData = warningLottie;

		lottie.loadAnimation({
			container: mailActionLottie,
			animationData
		});
	}, [isSuccessMailSent]);

	return (
		<Box sx={style}>
			<Box id="mailActionLottie" />

			<Typography id="modal-modal-description" sx={{ textAlign: "center" }}>
				{ isSuccessMailSent ? "Message sent successfully." : "Message failed to send."}
			</Typography>

		</Box>
	);
};

export default MailActionModal;
