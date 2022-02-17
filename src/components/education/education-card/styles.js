export const customStyle = {
	educationCard: {
		px: { md: 5, xs: 2 },
		display: "flex",
		flexDirection: { md: "row", xs: "column" },
		alignItems: "center"
	},
	educationCardInstitution: {
		fontWeight: 700,
		fontSize: { md: 30, xs: 20 },
		textTransform: "uppercase"
	},
	educationCardDegree: {
		pt: 1,
		fontSize: { md: 20, xs: 15 }
	},
	educationCardYear: {
		fontSize: { md: 20, xs: 15 }
	},
	educationCardText: {
		pl: { md: 2 },
		p: { xs: 2 },
		textAlign: { xs: "center", md: "start" }
	},
	educationCardBorderContainer: {
		px: 5,
		py: { md: 3, xs: 2 }
	},
	educationCardBorder: (educationborderId, eduId, hover) => {
		const active = educationborderId === eduId && hover;
		return {
			width: active ? "100%" : "80%",
			borderBottom: `2px solid ${
				active ? "#6600ff" : "rgb(231, 235, 240)"
			}`,
			transition: "width 0.6s ease-in-out"
		};
	}
};
