"use client";
import Header from "@/components/layout/header/header";
import Tags from "@/components/shared/tags/tags";
import CustomTitle from "@/components/shared/title/title";
import useGlobalState, { Stock } from "@/services/store";
import { Divider, Grid, Group, Stack, Text } from "@mantine/core";
import { IconAdjustmentsHorizontal, IconSettings } from "@tabler/icons-react";
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { intl } from "@/services/common";
import Menu from "@/components/layout/menu/menu";
import Tooltip from "@/components/shared/tooltip/tooltip";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Portfolio() {
	const router = useRouter();
	const { step } = useGlobalState((s) => s.useSteps);
	const stocks = useGlobalState((s) => s.stocks);
	const filtered = stocks.filter(
		(st) => st.ticker === "TSLA" || st.ticker === "NFLX"
	);

	const ourApp = step === 9 && (
		<Tooltip button="Next" coords={{ bottom: "0" }} delay={1}>
			With our App, trading and staying updated with latest market news is
			seamless and interactive
		</Tooltip>
	);

	const googleStore = step >= 10 && (
		<Tooltip button="Open in App" coords={{ bottom: "180px" }} delay={1}>
			Ready to embark on your real trading journey ?
			<br />
			Dive into our App now!
		</Tooltip>
	);

	useEffect(() => {
		if (step < 5) {
			router.push("/");
		}
	}, [router, step]);

	return (
		<div className={styles.page}>
			<Header />

			{ourApp}
			{googleStore}
			<Group justify="space-between" px={20}>
				<CustomTitle>Portfolio</CustomTitle>
				<Group>
					<IconAdjustmentsHorizontal
						size={30}
						color="var(--mantine-color-green-5)"
					/>
					<IconSettings
						size={30}
						color="var(--mantine-color-gray-7)"
					/>
				</Group>
			</Group>

			<Tags tags={["Orders", "Manual Trades", "Stocks"]} />

			<div className={styles.container} id="UList">
				<Grid c="gray.6" px={20} py={10}>
					<Grid.Col span={5.3}>
						<Text mr={40}>Asset</Text>
					</Grid.Col>
					<Grid.Col span={2.4}>
						<Text ta="left">Change</Text>
					</Grid.Col>
					<Grid.Col span={1.9}>
						<Text ta="left">P/L</Text>
					</Grid.Col>
					<Grid.Col span={2.4} c="blue.5">
						<Text ta="left">Value</Text>
					</Grid.Col>
				</Grid>

				<Divider w="90%" m="auto" p={10} />
				<ul className={styles.list}>
					{filtered.map((stock, index) => (
						<Item key={stock.ticker} stock={stock} index={index} />
					))}
				</ul>
			</div>

			<Menu />
		</div>
	);
}

const Item = ({ stock, index }: { stock: Stock; index: number }) => {
	const { ticker, high, low, prevClose } = stock;
	const profit = useGlobalState((s) => s.profit);

	const mid = (high + low) / 2;
	const tickerInfo = mid - prevClose;
	const percent = ((tickerInfo / low) * 100)?.toFixed(1);

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
			<Grid align="center">
				<Grid.Col span={5.3} p={0}>
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
				<Grid.Col span={2.4}>
					<Text ta="center" fz="sm" c="green.5">
						{(profit / 10).toFixed(2)}
					</Text>
				</Grid.Col>
				<Grid.Col span={1.9}>
					<Text fz="sm" c="green.5">
						{(profit * (Math.random() * 5)).toFixed(2)}
					</Text>
				</Grid.Col>
				<Grid.Col span={2.4} p={0}>
					<Text fz="sm" p={0}>
						{intl(profit * (Math.random() * 20) + 10000)}
					</Text>
				</Grid.Col>
			</Grid>
		</motion.li>
	);
};
