"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Stack } from "@mantine/core";
import useGlobalState, { Stock } from "@/services/store";
import styles from "./modal.module.css";
import { useEffect } from "react";
import ShortOrBuy from "./modal.shortOrBuy";
import StockInfo from "./modal.stockInfo";
import Amount from "./modal.amount";
import Leverage from "./modal.leverage";
import Order from "./modal.order";

function OrderModal() {
	const { step, nextStep } = useGlobalState((s) => s.useSteps);
	const stocks = useGlobalState((s) => s.stocks);
	const [opened, { open, close }] = useDisclosure(false);

	const stock = stocks.find((stock) => {
		if (step === 3) {
			return stock.ticker === "TSLA";
		}
		return stock.ticker === "NFLX";
	});

	useEffect(() => {
		if (step == 3 || step === 6) {
			open();
		} else if (step === 4 || step === 7) {
			close();
		}
	}, [close, open, step]);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				fullScreen
				transitionProps={{ transition: "fade", duration: 500 }}
				withCloseButton={false}
				padding={0}
			>
				<Stack maw="480px" m="auto" gap={0}>
					<ShortOrBuy step={step} />
					<StockInfo step={step} stock={stock} />
					<Amount high={stock?.high} />
					<Leverage />
					<Order />
				</Stack>
			</Modal>
		</>
	);
}

export default OrderModal;
