"use client";
import styles from "./tags.module.css";

type Props = {
	tags: string[];
};

function Tags({ tags }: Props) {
	return (
		<ul className={styles.list}>
			{tags.map((tag) => (
				<li className={styles.item} key={tag}>
					{tag}
				</li>
			))}
		</ul>
	);
}

export default Tags;
