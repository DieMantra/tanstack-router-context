import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pageA')({
	beforeLoad: ({ context }) => {
		console.log('page A: beforeLoad', context.count);
	},
	component: () => <div>Hello /pageA!</div>,
});
