import React, { useEffect } from "react";
import { Box, Typography, Modal } from "@mui/material";
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

const MailActionModal = ({ isModalopen, setModalOpen }) => {
	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#mailActionLottie"),
			animationData: isModalopen ? successLottie : warningLottie
		});
	}, [isModalopen]);

	return (
		<Modal
			open={isModalopen}
			onClose={() => setModalOpen(false)}
			aria-labelledby="mailActionLottie"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Box id="mailActionLottie" />
				<Typography
					id="modal-modal-description"
					sx={{ textAlign: "center" }}
				>
					{isModalopen
						? "Message sent successfully."
						: "Message failed to send."}
				</Typography>
			</Box>
		</Modal>
	);
};

export default MailActionModal;
