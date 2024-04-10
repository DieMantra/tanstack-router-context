import CountProvider from '../lib/count/count-CTX';

export default function Providers({ children }: { children: React.ReactNode }) {
	return <CountProvider>{children}</CountProvider>;
}
