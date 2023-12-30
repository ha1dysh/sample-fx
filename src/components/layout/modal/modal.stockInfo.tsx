import Image from "next/image";
import { Stock } from "@/services/store";
import { Stack, Group, Text } from "@mantine/core";
import {
	IconTriangleInvertedFilled,
	IconClockHour3,
} from "@tabler/icons-react";
import styles from "./modal.module.css";

export default function StockInfo({
	step,
	stock,
}: {
	step: number;
	stock: Stock | undefined;
}) {
	const shortOrBuy = step < 4;
	if (!stock) {
		return;
	}
	const mid = (stock.high + stock.low) / 2;
	const tickerInfo = mid - stock?.prevClose;
	const percent = ((tickerInfo / stock.low) * 100)?.toFixed(1);

	return (
		<div className={styles.stockInfo}>
			<Image
				src={`./${shortOrBuy ? "TSLA" : "NFLX"}.svg`}
				alt="tesla logo"
				width={60}
				height={60}
			/>

			<Stack w="100%" gap={0}>
				<Group w="100%" justify="space-between">
					<Group gap={4}>
						<Text fw="bold" c="gray.6">
							{shortOrBuy ? "BUY " : "SHORT "}
						</Text>
						<Text fw="bold">{shortOrBuy ? "TSLA" : "NFLX"}</Text>
					</Group>
					<Group gap={4} align="baseline">
						<Text c="blue.5">TRADE</Text>
						<IconTriangleInvertedFilled
							size={10}
							style={{
								color: "var(--mantine-color-blue-5)",
							}}
						/>
					</Group>
				</Group>

				<Group gap={4} align="baseline">
					<Text fw="bold" size="xl" lh={1}>
						{stock?.high}
					</Text>
					<Text c={tickerInfo > 0 ? "green.5" : "red.5"}>
						{tickerInfo.toFixed(2)}
					</Text>

					<Text c={tickerInfo > 0 ? "green.5" : "red.5"}>
						({percent}%)
					</Text>
				</Group>

				<Group gap={4} c="gray.6" align="center">
					<Text fz="xs">PRICE BY NASDAQ, IN USD |</Text>
					<IconClockHour3 size={19} />
					<Text fz="xs">MARKET CLOSED</Text>
				</Group>
			</Stack>
		</div>
	);
}
