"use client";
import Link from "next/link";
import {
	IconHome,
	IconMenu2,
	IconChartPieFilled,
	IconZoomFilled,
} from "@tabler/icons-react";
import styles from "./menu.module.css";
import useGlobalState from "@/services/store";

export default function Menu() {
	const { step } = useGlobalState((s) => s.useSteps);
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<IconHome size={32} className={styles.icon} />
					<Link className={styles.link} href="#">
						Home
					</Link>
				</li>
				<li className={styles.item}>
					<IconMenu2
						size={32}
						className={styles.icon}
						color={
							step < 7
								? "var(--mantine-color-green-5)"
								: "var(--mantine-color-gray-7)"
						}
					/>
					<Link
						className={styles.link}
						href="#"
						style={{
							color:
								step < 7
									? "var(--mantine-color-green-5)"
									: "var(--mantine-color-gray-7)",
						}}
					>
						Watchlist
					</Link>
				</li>
				<li className={styles.item}>
					<IconChartPieFilled
						size={32}
						className={styles.icon}
						style={{
							color:
								step >= 9
									? "var(--mantine-color-green-5)"
									: "var(--mantine-color-gray-7)",
						}}
					/>
					<Link
						className={styles.link}
						href="#"
						style={{
							color:
								step >= 9
									? "var(--mantine-color-green-5)"
									: "var(--mantine-color-gray-7)",
						}}
					>
						Portfolio
					</Link>
				</li>
				<li className={styles.item}>
					<IconZoomFilled size={32} className={styles.icon} />
					<Link className={styles.link} href="#">
						Discover
					</Link>
				</li>
			</ul>
		</nav>
	);
}
