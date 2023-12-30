import { intl } from "@/services/common";
import { Group, Stack, Text } from "@mantine/core";
import { IconArrowsExchange2, IconMinus, IconPlus } from "@tabler/icons-react";
import styles from "./modal.module.css";

export default function Amount({ high }: any) {
	return (
		<>
			<Group justify="space-between" w="80%" mx="auto" my={15}>
				<Text fw="bold">AMOUNT</Text>

				<Group gap={4} className={styles.exchange}>
					<IconArrowsExchange2
						color="var(--mantine-color-blue-5)"
						strokeWidth={3}
					/>
					<Text fw="bold" c="blue.5">
						UNITS
					</Text>
				</Group>
			</Group>

			<div className={styles.amount}>
				<button className={styles.buttons}>
					<IconMinus size={32} strokeWidth={4} />
				</button>
				<input
					className={styles.amountInput}
					type="number"
					value={10000}
					disabled
				/>
				<button className={styles.amountButtons}>
					<IconPlus size={32} strokeWidth={4} />
				</button>
			</div>

			<Stack align="center" gap={0}>
				<Group gap={4}>
					<Text fz="sm" fw="bold" c="gray.6">
						{(10000 / high)?.toFixed(2)}
					</Text>
					<Text fz="sm" c="gray.6">
						UNITS | EXPOSURE {intl(10000)}
					</Text>
				</Group>
				<Text fz="sm" c="gray.6">
					{((10000 / 100000) * 100)?.toFixed(2)}% OF EQUITY
				</Text>
			</Stack>
		</>
	);
}
