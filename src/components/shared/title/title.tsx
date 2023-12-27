import { Group, Title } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

export default function CustomTitle({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Group gap="xs">
			<Title>{children}</Title>
			<IconChevronDown />
		</Group>
	);
}
