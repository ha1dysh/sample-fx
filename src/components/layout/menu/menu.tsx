"use client";
import Link from "next/link";
import {
	IconHome,
	IconMenu2,
	IconChartPieFilled,
	IconZoomFilled,
} from "@tabler/icons-react";
import styles from "./menu.module.css";

export default function Menu() {
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
					<IconMenu2 size={32} className={styles.icon} />
					<Link className={styles.link} href="#">
						Watchlist
					</Link>
				</li>
				<li className={styles.item}>
					<IconChartPieFilled size={32} className={styles.icon} />
					<Link className={styles.link} href="#">
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
