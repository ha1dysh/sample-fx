"use client";
import { Button, Text } from "@mantine/core";
import styles from "./tooltip.module.css";
import { motion } from "framer-motion";
import useGlobalState from "@/services/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
	children: React.ReactNode;
	button?: string;
	coords?: { top?: string; bottom?: string; left?: string; right?: string };
	delay?: number;
	position?: "absolute" | "fixed";
};

export default function Tooltip({
	children,
	button,
	coords = { bottom: "0", left: "0", top: "0", right: "0" },
	delay = 0,
	position = "absolute",
}: Props) {
	const router = useRouter();
	const { step, nextStep } = useGlobalState((s) => s.useSteps);

	useEffect(() => {
		const content = document.querySelector(".content") as HTMLElement;
		content.style.overflow = "hidden";
		return () => {
			content.style.overflow = "scroll";
		};
	}, []);

	function handleClick() {
		nextStep();
		if (step === 8) {
			router.push("/portfolio");
		}
	}

	return (
		<motion.div
			className={styles.container}
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay }}
			exit={{ opacity: 0, transition: { delay: 0, duration: 1 } }}
			style={{ ...coords, position }}
		>
			<Text fz="lg">{children}</Text>

			{button && step <= 9 && (
				<Button
					w="75%"
					h="40"
					fz="lg"
					c="#fff"
					my={10}
					onClick={handleClick}
				>
					{button}
				</Button>
			)}

			{step > 9 && (
				<Link href="https://play.google.com/" target="_blank">
					<Button
						w="75%"
						h="40"
						fz="lg"
						my={10}
						onClick={handleClick}
					>
						{button}
					</Button>
				</Link>
			)}
		</motion.div>
	);
}
