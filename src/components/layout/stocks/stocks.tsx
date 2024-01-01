"use client";
import useGlobalState, { Stock } from "@/services/store";
import { Divider, Group, Text, SimpleGrid, Stack, Grid } from "@mantine/core";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./stocks.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Tooltip from "@/components/shared/tooltip/tooltip";

export default function Stocks() {
	const { step, nextStep } = useGlobalState((s) => s.useSteps);

	const fetchStocks = useGlobalState((s) => s.fetchStocks);
	const stocks = useGlobalState((s) => s.stocks);

	useEffect(() => {
		fetchStocks();
	}, [fetchStocks]);

	const list = useRef(null);
	const scroll = useGlobalState((s) => s.scroll);
	const el = document.getElementById("UList") as any;
	useEffect(() => {
		if (scroll) {
			setTimeout(() => {
				el?.scrollIntoView({
					behavior: "smooth",
					block: "end",
				});
			}, 500);
		}
	}, [el, scroll]);

	return (
		<div className={styles.container} id="UList" ref={list}>
			<SimpleGrid cols={3} c="gray.6" px={20} py={10}>
				<Text>Markets</Text>
				<Text ta="right">Short</Text>
				<Text ta="center">Buy</Text>
			</SimpleGrid>

			<Divider w="90%" m="auto" p={10} />

			<ul className={styles.list}>
				{stocks.map((stock, index) => (
					<Item key={stock.ticker} stock={stock} index={index} />
				))}
			</ul>
		</div>
	);
}

export const Item = ({ stock, index }: { stock: Stock; index: number }) => {
	const { step, nextStep } = useGlobalState((s) => s.useSteps);
	const { ticker, high, low, prevClose } = stock;

	const mid = (high + low) / 2;
	const tickerInfo = mid - prevClose;
	const percent = ((tickerInfo / low) * 100)?.toFixed(1);

	const isTesla = step === 2 && ticker === "TSLA";
	const isNetflix = step === 5 && ticker === "NFLX";
	const handleClick = isTesla || isNetflix ? handler : undefined;

	function handler() {
		nextStep();
	}

	const letsBuyTip = isTesla && (
		<Tooltip coords={{ top: "60px" }}>
			Lets start buying!
			<br />
			Tap BUY to open trade
		</Tooltip>
	);

	const letsSellTip = isNetflix && (
		<Tooltip coords={{ top: "60px" }} delay={1}>
			Lets start selling!
			<br />
			Tap SELL to open trade
		</Tooltip>
	);

	return (
		<motion.li
			className={styles.item}
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				duration: 0.75,
				ease: "easeInOut",
				delay: 0.1 * index,
			}}
		>
			<AnimatePresence>{letsSellTip}</AnimatePresence>
			<AnimatePresence>{letsBuyTip}</AnimatePresence>
			<Grid align="center">
				<Grid.Col span={6}>
					<Group gap="xs">
						<Image
							src={`./${ticker}.svg`}
							alt="stock image"
							width={50}
							height={50}
						/>

						<Stack gap={0}>
							<Text fw="bold">{ticker}</Text>
							<Text
								size="xs"
								c={tickerInfo > 0 ? "green.5" : "red.5"}
							>
								{tickerInfo?.toFixed(2)}({percent}%)
							</Text>
						</Stack>
					</Group>
				</Grid.Col>

				<Grid.Col span={2.7} offset={0.3} p={0}>
					<motion.div
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
						onClick={handleClick}
					>
						<Text
							size="lg"
							ta="right"
							p={8}
							c={isNetflix ? "#fff" : "#000"}
							bg={isNetflix ? "" : "gray.2"}
						>
							{mid?.toFixed(2)}
						</Text>
					</motion.div>
				</Grid.Col>

				<Grid.Col span={2.7} offset={0.3} p={0}>
					<motion.div
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
						onClick={handleClick}
					>
						<Text
							p={8}
							ta="center"
							size="lg"
							c={isTesla ? "#fff" : "#000"}
							bg={isTesla ? "" : "gray.2"}
						>
							{high?.toFixed(2)}
						</Text>
					</motion.div>
				</Grid.Col>
			</Grid>
		</motion.li>
	);
};
