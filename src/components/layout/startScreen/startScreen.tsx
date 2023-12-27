"use client";
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, Title } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import { motion } from "framer-motion";
import styles from "./startScreen.module.css";
import { useRouter } from "next/navigation";

export default function StartScreen() {
	const router = useRouter();
	const { toggle } = useFullscreen();
	const [opened, { close }] = useDisclosure(true);

	function handleClick() {
		toggle();
		close();
		router.push("/watchlist");
	}

	return (
		<Modal
			opened={opened}
			onClose={close}
			radius={0}
			fullScreen
			transitionProps={{ transition: "fade", duration: 200 }}
			withCloseButton={false}
		>
			<div className={styles.welcomePage}>
				<motion.div
					className={styles.yatoro}
					onClick={handleClick}
					initial={{
						opacity: 0,
						scale: 0,
						borderRadius: "50%",
					}}
					animate={{
						opacity: 1,
						scale: 1,
						borderRadius: "8px",
					}}
					transition={{ duration: 0.75, ease: "easeInOut" }}
				>
					<Button w={125} h={125} size="compact-xl" fw="bold">
						YATORO
					</Button>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.75, ease: "easeInOut" }}
				>
					<Title>Welcome back!</Title>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, scale: 0.6 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.75,
						ease: "easeInOut",
					}}
				>
					{`Explore the app's key features before diving in.`}
				</motion.p>

				<motion.div
					className={styles.btn}
					onClick={handleClick}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.75,
						ease: "easeInOut",
					}}
				>
					<Button>{`Let's get started!`}</Button>
				</motion.div>
			</div>
		</Modal>
	);
}
