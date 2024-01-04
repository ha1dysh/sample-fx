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
				h="100%"
			>
				<div className={styles.container}>
					<Stack
						justify="space-evenly"
						gap={0}
						maw="480px"
						mah={850}
						h="100dvh"
					>
						<div>
							<ShortOrBuy step={step} />
						</div>
						<div>
							<StockInfo step={step} stock={stock} />
						</div>
						<div>
							<Amount high={stock?.high} />
						</div>
						<div>
							<Leverage />
						</div>
						<div>
							<Order />
						</div>
					</Stack>
				</div>
			</Modal>
		</>
	);
}

export default OrderModal;
