import { intl } from "@/services/common";
import styles from "./header.module.css";
import { IconBellFilled, IconMenuDeep } from "@tabler/icons-react";
import { Stack, Text } from "@mantine/core";

function Header() {
	const color = "var(--mantine-color-gray-7)";

	return (
		<header className={styles.container}>
			<IconMenuDeep color={color} size={32} />

			<Stack gap={0} align="center">
				<Text c={"blue.5"}>{intl(100_000)}</Text>
				<Text c="green.5" size="xs">
					{intl(0)}
				</Text>
			</Stack>

			<IconBellFilled style={{ color }} size={32} />
		</header>
	);
}

export default Header;
