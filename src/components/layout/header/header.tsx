"use client";
import { intl } from "@/services/common";
import styles from "./header.module.css";
import { IconBellFilled, IconMenuDeep } from "@tabler/icons-react";
import { Stack, Text } from "@mantine/core";
import useGlobalState from "@/services/store";

function Header() {
	const balance = useGlobalState((s) => s.balance);
	const profit = useGlobalState((s) => s.profit);
	const color = "var(--mantine-color-gray-7)";

	return (
		<header className={styles.container}>
			<IconMenuDeep color={color} size={32} />

			<Stack gap={0} align="center">
				<Text c={"blue.5"}>{intl(balance)}</Text>
				<Text c="green.5" size="xs">
					{intl(profit)}
				</Text>
			</Stack>

			<IconBellFilled style={{ color }} size={32} />
		</header>
	);
}

export default Header;
