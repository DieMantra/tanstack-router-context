import { useContext } from 'react';
import { CountContext } from './count-CTX';

export const useCount = () => {
	const countCTX = useContext(CountContext);
	if (!countCTX) {
		throw new Error('useCount must be used within a CountProvider');
	}
	return countCTX;
};
