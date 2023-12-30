"use client";
import useGlobalState from "@/services/store";
import styles from "./received.module.css";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Received() {
	const { step, nextStep } = useGlobalState((s) => s.useSteps);
	const setScroll = useGlobalState((s) => s.setScroll);

	useEffect(() => {
		setTimeout(() => {
			if (step === 4 || step === 7) {
				nextStep();
				setScroll();
			}
		}, 1500);

		return () => {};
	}, [nextStep, setScroll, step]);

	return (
		<motion.div
			className={styles.container}
			initial={{ y: 40, opacity: 0.5 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<Image
				src={`../${step < 7 ? "TSLA" : "NFLX"}.svg`}
				alt="stock logo"
				width={50}
				height={50}
			/>
			<span className={styles.order}>ORDER RECEIVED</span>
			<span className={styles.buy}>
				{step < 7 ? "Buy TSLA" : "Sell NFLX"} at market
			</span>
		</motion.div>
	);
}

export default Received;
