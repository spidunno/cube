import { keyframes } from "@emotion/react";
import {
	Box,
	Button,
	Stack,
	styled,
	Typography,
	useColorScheme,
} from "@mui/joy";
import "@fontsource/press-start-2p/index.css";

const count = 3;

export default function Home() {
	// const { colorScheme, setColorScheme } = useColorScheme();

	return (
		<Box width="100%" height="100%">
			{/* <Button
				onClick={() => {
					if (colorScheme === "dark") setColorScheme("light");
					if (colorScheme === "light") setColorScheme("dark");
				}}
			>
				color
			</Button> */}
			<Stack direction="column" justifyContent={"center"} height={"100%"}>
				<Stack direction={"row"} justifyContent={"center"} width={"100%"}>
					<Stack direction={"column"} spacing={"-0.47em"}>
						<CubeEffect move="down" delay={"0s"} />
						<CubeEffect delay={"0.3535533905932738s"} />
						<CubeEffect move="up" delay={"0.5s"} />
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
}
const rotate = keyframes`
from {
	transform: rotateY(0deg);
}
	
to {
	transform: rotateY(360deg);
}`;

const fadeIn = keyframes`
from {
	opacity: 0;
}
75% {
	opacity: 1;
}
`;

const moveDown = keyframes`
from {
	top: 0;
}

to {
	top: 1em;
	color: transparent;
}
`;
const moveUp = keyframes`
from {
	top: 0;
}

to {
	top: -1em;
		color: transparent;
}
`;

const RotatedNameBox = styled(Box)(() => ({
	position: "absolute",
	top: "0",
	left: "0",
	transformOrigin: "center center 1.55em",
	backfaceVisibility: "hidden",
	animation: `${fadeIn} 1.5s cubic-bezier(.5, 0, 0.35, 1)`,
}));

function CubeEffect(
	{ delay, move }: { delay?: string; move?: string } = { delay: "0" }
) {
	return (
		<Box
			fontFamily={'"Press Start 2P"'}
			fontSize={{
				xs: "48pt",
				sm: "72pt",
			}}
			sx={{
				userSelect: "none",
				// top: props.top,
				// top: 0,
				// bottom: 0,
				transformStyle: "preserve-3d",
				transformOrigin: "center center 1.55em",
				position: "relative",
				animation: `${rotate} 1.5s cubic-bezier(.5, 0, 0.35, 1)${
					move
						? `, ${
								move === "down" ? moveDown : moveUp
						  } 0.5s cubic-bezier(.5, 0, 0.35, 1)`
						: ""
				}`,
				animationFillMode: "forwards",
				animationDelay: `${delay}${move ? ", 1.75s" : ""}`,
				// transform: "rotateY(90deg)",
			}}
		>
			<Box
				sx={{
					transformOrigin: "center center 1em",
					backfaceVisibility: "hidden",
					animation: `${fadeIn} 1.5s cubic-bezier(.5, 0, 0.35, 1)`,
				}}
			>
				qbq
			</Box>
			<RotatedNameBox
				sx={{
					transform: "rotateY(90deg)",
					animationDelay: delay,
					color: (theme) => `rgb(${theme.palette.warning.mainChannel})`,
				}}
			>
				qbq
			</RotatedNameBox>
			<RotatedNameBox
				sx={{
					transform: "rotateY(180deg)",
					animationDelay: delay,
					color: (theme) => theme.palette.colorScheme === "dark" ? "#fcee26" : "#e0cb2b"
				}}
			>
				qbq
			</RotatedNameBox>
			<RotatedNameBox
				sx={{
					transform: "rotateY(270deg)",
					animationDelay: delay,
					color: (theme) => `rgb(${theme.palette.danger.mainChannel})`,
				}}
			>
				qbq
			</RotatedNameBox>
		</Box>
	);
}
