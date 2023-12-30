import { create } from "zustand";
import { fakeData } from "./fakeData";
import { fakeRandom } from "./common";

export type Stock = (typeof fakeData)[number];

type State = {
	balance: number;
	profit: number;
	useSteps: {
		step: number;
		nextStep: () => void;
	};
	stocks: [] | Stock[];
	fetchStocks: () => Promise<void>;
	scroll: boolean;
	setScroll: () => void;
};

const useGlobalState = create<State>((set) => ({
	balance: 100_000,
	profit: 0,

	useSteps: {
		step: 1,
		nextStep: () =>
			set((state) => {
				const newState = {
					...state,
					useSteps: {
						...state.useSteps,
						step: state.useSteps.step + 1,
					},
				};

				if (state.useSteps.step === 3) {
					setInterval(
						() => set({ profit: Math.random() * 1.7 }),
						2500
					);
					return {
						...newState,
						balance: 90_000,
					};
				}

				return newState;
			}),
	},

	stocks: [],
	fetchStocks: async () => {
		set({
			stocks: await new Promise((resolve) =>
				setTimeout(() => resolve(fakeData), 500)
			),
		});

		setInterval(() => {
			set((state) => ({
				stocks: state.stocks.map((stock) => ({
					...stock,
					...fakeRandom(stock),
				})),
			}));
		}, 5000);
	},

	scroll: false,
	setScroll: () => set((s) => ({ ...s, scroll: !s.scroll })),
}));

export default useGlobalState;
