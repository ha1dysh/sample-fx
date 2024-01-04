import { intl } from "@/services/common";
import { Stack, Group, Paper, Text } from "@mantine/core";

export default function Leverage() {
	return (
		<Stack gap={0} w="85%" mx="auto" align="center" bg="gray.0">
			<Group>
				<Stack gap={0} p={8}>
					<Text fz="sm" c="red.5">
						{intl(10000 / 2)}
					</Text>
					<Text fz="xs" c="blue.5">
						STOP LOSS
					</Text>
				</Stack>

				<Stack gap={0} p={8} ta="center">
					<Text>X1</Text>
					<Text c="gray.6">LEVERAGE</Text>
				</Stack>

				<Stack gap={0} p={8}>
					<Text fz="sm" c="green.5">
						{intl(10000)}
					</Text>
					<Text fz="xs" c="blue.5">
						TAKE PROFIT
					</Text>
				</Stack>
			</Group>

			<Group gap={0}>
				<Paper
					py={16}
					px={36}
					c="#fff"
					bg="blue.5"
					withBorder
					radius={0}
				>
					X1
				</Paper>
				<Paper py={16} px={36} c="blue.5" withBorder radius={0}>
					X2
				</Paper>
				<Paper py={16} px={36} c="blue.5" withBorder radius={0}>
					X5
				</Paper>
			</Group>

			<Stack py={20} pb={10} gap={0} ta="center" c="gray.6">
				<Text fz="xs" fw="bold">
					CFD TRADE
				</Text>
				<Text fz="xs" fw="bold">
					HIGHER LEVERAGE MEANS HIGHER RISK
				</Text>
			</Stack>
		</Stack>
	);
}
