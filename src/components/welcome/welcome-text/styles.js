import { keyframes } from '@mui/system';

const webEmojiAnimation = keyframes`
	0% {
		transform: rotate(0deg);
	}
    10% {
		transform: rotate(-15deg);
	}
	20% {
		transform: rotate(25deg);
	}
	30% {
		transform: rotate(-15deg);
	}
	40% {
		transform: rotate(25deg);
	}
	50% {
		transform: rotate(-15deg);
	}
	60% {
		transform: rotate(25deg);
	}
    70% {
		transform: rotate(-15deg);
	}
    80% {
		transform: rotate(25deg);
	}
    90% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(0deg);
	}
`;

export const customStyle = {
	webEmoji: {
        animation: `${webEmojiAnimation} 2.5s infinite`,
		transformOrigin: "70% 70%",
		display: "inline-block"
	},
	buttonStyle: {
		background: '#6600ff',
		'&:hover': {
			background: '#6600ff'
		}
	},
	centerInSM: {
		display: { xs: 'flex', md: 'inline'},
		alignItems: { xs: 'center', md: ''},
		justifyContent: { xs: 'center', md: ''},
		flexDirection: { xs: 'column', md: ''}
	}
};
