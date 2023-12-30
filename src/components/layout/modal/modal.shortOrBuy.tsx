import { Group, Text } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

export default function ShortOrBuy({ step }: { step: number }) {
	const shortOrBuy = step > 4;
	const position = shortOrBuy ? { left: "3px" } : { right: "3px" };

	return (
		<Group
			w="100%"
			justify="center"
			align="center"
			mt={20}
			p={15}
			pos="relative"
			bg="blue.5"
		>
			<Group
				pos="relative"
				justify="space-around"
				bg="gray.3"
				w="50%"
				p={10}
				style={{ borderRadius: "8px" }}
			>
				<div
					style={{
						position: "absolute",
						...position,
						width: "50%",
						textAlign: "center",
						padding: "7px",
						borderRadius: "8px",
						fontWeight: "bold",
						color: "var(--mantine-color-red-8)",
						backgroundColor: "#fff",
					}}
				>
					{shortOrBuy ? "Short" : "Buy"}
				</div>
				<Text fw="bold" c="gray.6">
					Short
				</Text>
				<Text fw="bold" c="gray.6">
					Buy
				</Text>
			</Group>

			<div
				style={{
					position: "absolute",
					right: "5%",
					display: "flex",
					alignItems: "center",
				}}
			>
				<IconX color="#fff" size={40} />
			</div>
		</Group>
	);
}
