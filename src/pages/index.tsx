import { keyframes } from "@emotion/react";
import { Box, Stack, styled, Typography } from "@mui/joy";

const count = 6;

export default function Home() {
	return (
		<Stack>
			<Stack direction={"row"} justifyContent={"center"} width={"100%"}>
				<Stack direction={"column"}>
					{[...Array(count).keys()].map((v, i) => {
						return (
							<CubeEffect
								key={i}
								delay={`${Math.pow(i / (count - 1), 1.5) / 2}s`}
							/>
						);
					})}
				</Stack>
			</Stack>
		</Stack>
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

const RotatedNameBox = styled(Box)(() => ({
	position: "absolute",
	top: "0",
	left: "0",
	transformOrigin: "center center 1em",
	backfaceVisibility: "hidden",
	animation: `${fadeIn} 1.5s cubic-bezier(.5, 0, 0.35, 1)`,
}));

function CubeEffect({ delay }: { delay?: string } = { delay: "0" }) {
	return (
		<Box
			fontSize={{
				xs: "48pt",
				sm: "72pt",
			}}
			sx={{
				// top: props.top,
				transformStyle: "preserve-3d",
				transformOrigin: "center center 1em",
				position: "relative",
				animation: `${rotate} 1.5s cubic-bezier(.5, 0, 0.35, 1)`,
				animationDelay: delay,
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
				}}
			>
				qbq
			</RotatedNameBox>
			<RotatedNameBox
				sx={{
					transform: "rotateY(180deg)",
					animationDelay: delay,
				}}
			>
				qbq
			</RotatedNameBox>
			<RotatedNameBox
				sx={{
					transform: "rotateY(270deg)",
					animationDelay: delay,
				}}
			>
				qbq
			</RotatedNameBox>
		</Box>
	);
}
