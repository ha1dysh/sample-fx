import { Stock } from "./store";

export function intl(v: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(v);
}

export function fakeRandom(stock: Stock) {
	const roundToDecimal = (value: number) => Math.round(value * 10) / 10;
	const applyFluctuation = (original: number) =>
		roundToDecimal(original + (Math.random() - 0.5) * 1);

	return {
		high: applyFluctuation(stock.high),
		low: applyFluctuation(stock.low),
		prevClose: applyFluctuation(stock.prevClose),
	};
}
