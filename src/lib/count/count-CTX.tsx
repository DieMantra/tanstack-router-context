import { createContext, useState } from 'react';

export interface CountContextType {
	count: number;
	increment: () => void;
	decrement: () => void;
}

export const CountContext = createContext<CountContextType | undefined>(undefined);

export default function CountProvider({ children }: { children: React.ReactNode }) {
	const [count, setCount] = useState(0);

	function increment() {
		setCount((prev) => {
			console.log('increment BEFORE VALUE: ' + prev);
			console.log('increment AFTER VALUE: ' + (prev + 1));
			return prev + 1;
		});
	}

	function decrement() {
		setCount((prev) => {
			console.log('decrement BEFORE VALUE: ' + prev);
			console.log('decrement AFTER VALUE: ' + (prev - 1));
			return prev - 1;
		});
	}

	return (
		<CountContext.Provider
			value={{
				count,
				increment,
				decrement,
			}}
		>
			{children}
		</CountContext.Provider>
	);
}
