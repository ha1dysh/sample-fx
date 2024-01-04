import { intl } from "@/services/common";
import useGlobalState from "@/services/store";
import { Stack, Group, Text } from "@mantine/core";
import { motion } from "framer-motion";
import styles from "./modal.module.css";

export default function Order() {
	const balance = useGlobalState((s) => s.balance);
	const { nextStep } = useGlobalState((s) => s.useSteps);

	return (
		<Stack gap={0} m="auto" maw="85%" justify="center" align="center">
			<Text fz={22}>{`Cash Available ${intl(balance)}`}</Text>

			<motion.button
				className={styles.orderButton}
				onClick={nextStep}
				animate={{
					backgroundColor: ["#00a", "#08f"],
					transition: {
						duration: 1.2,
						repeat: Infinity,
						repeatType: "mirror",
						ease: "easeInOut",
					},
				}}
				whileTap={{ scale: 0.9 }}
			>
				Set order
			</motion.button>

			<Group gap={0}>
				<Text fz="xs" fw="bold">
					OVERNIGHT FEE
				</Text>
				<Text fz="xs" c="gray.6">
					: DAILY : $0.00 | WEEKEND: $0.00
				</Text>
			</Group>
		</Stack>
	);
}
