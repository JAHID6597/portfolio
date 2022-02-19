import React, { useState, useRef } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import MailActionModal from "./MailActionModal";

const ContactForm = () => {
	const [isModalopen, setModalOpen] = useState(false);
	const [isSuccessMailSent, setSuccessMailSent] = useState(false);
	const contactFormRef = useRef(null);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				contactFormRef.current,
				process.env.REACT_APP_USER_ID
			)
			.then(
				(result) => {
					contactFormRef.current.reset();
					setModalOpen(true);
					setSuccessMailSent(true);
				},
				(error) => {
					setModalOpen(true);
					setSuccessMailSent(false);
				}
			);
	};

	return (
		<>
			<Box sx={{ width: "100%", mt: { md: 15 }, px: 3 }}>
				<Box
					sx={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
				>
					<Typography
						variant="h2"
						sx={{
							fontSize: { md: 50, xs: 35 },
							fontWeight: "bold",
							textTransform: "uppercase",
							textAlign: "center",
							pt: 5
						}}
					>
						Contact Me
					</Typography>
					<Box sx={{ px: { md: 5, xs: 3 }, py: 5 }}>
						<form
							ref={contactFormRef}
							onSubmit={sendEmail}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								gap: 15
							}}
						>
							<TextField
								required
								label="Name"
								name="name"
								fullWidth
								type="text"
								variant="outlined"
							/>
							<TextField
								required
								label="Email Address"
								name="email"
								type="email"
								fullWidth
								variant="outlined"
							/>
							<TextField
								required
								label="Subject"
								name="subject"
								type="text"
								fullWidth
								variant="outlined"
							/>
							<TextField
								label="Message"
								required
								multiline
								rows={5}
								type="text"
								fullWidth
								name="message"
							/>
							<Button
								variant="contained"
								size="large"
								fullWidth
								type="submit"
								sx={{
									bgcolor: "#6600ff",
									"&:hover": {
										background: "#6600ff"
									}
								}}
							>
								Send Message
							</Button>
						</form>

						{isModalopen && (
							<Modal
								open={isModalopen}
								onClose={() => setModalOpen((isModalopen) => !isModalopen)}
								aria-labelledby="mailActionLottie"
								aria-describedby="modal-modal-description"
							>
								<MailActionModal isSuccessMailSent={isSuccessMailSent} />
							</Modal>
						)}

					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ContactForm;
