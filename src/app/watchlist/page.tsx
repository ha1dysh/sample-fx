"use client";
import Header from "@/components/layout/header/header";
import { Group } from "@mantine/core";
import styles from "./page.module.css";
import { IconAdjustmentsHorizontal, IconSettings } from "@tabler/icons-react";
import CustomTitle from "@/components/shared/title/title";
import Tags from "@/components/shared/tags/tags";
import Menu from "@/components/layout/menu/menu";
import useGlobalState from "@/services/store";
import { AnimatePresence } from "framer-motion";
import Modal from "@/components/layout/modal/modal";
import Received from "@/components/shared/received/received";
import dynamic from "next/dynamic";

const DynamicTooltip = dynamic(
	() => import("@/components/shared/tooltip/tooltip"),
	{
		ssr: false,
	}
);

const DynamicStocks = dynamic(
	() => import("@/components/layout/stocks/stocks"),
	{
		ssr: false,
	}
);

export default function Watchlist() {
	const { step } = useGlobalState((s) => s.useSteps);

	const allInTip = step === 1 && (
		<DynamicTooltip button="Next" coords={{ bottom: "80px" }} delay={1}>
			Your all-in-one trading solution
			<br />
			Everything you need
		</DynamicTooltip>
	);

	const success = step === 8 && (
		<DynamicTooltip
			button="Check your Portfolio"
			coords={{ bottom: "30%" }}
			delay={1}
			position="fixed"
		>
			Both trades opened successfully
		</DynamicTooltip>
	);

	return (
		<div className={styles.page}>
			<Modal />

			<Header />

			<Group justify="space-between" px={20}>
				<CustomTitle>My Watchlist</CustomTitle>
				<Group gap={0}>
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
			<div>
				<Tags
					tags={[
						"All",
						"Crypto",
						"Indices",
						"Stocks",
						"Currencies",
						"ETFs",
					]}
				/>
			</div>

			<div className={styles.stocksWrapper}>
				<DynamicStocks />
			</div>

			<AnimatePresence>{allInTip}</AnimatePresence>
			<AnimatePresence>{success}</AnimatePresence>
			<AnimatePresence>{step === 4 && <Received />}</AnimatePresence>
			<AnimatePresence>{step === 7 && <Received />}</AnimatePresence>
			<Menu />
		</div>
	);
}
