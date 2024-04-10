import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pageB')({
	beforeLoad: ({ context }) => {
		console.log('page B: beforeLoad', context.count);
	},
	component: () => <div>Hello /pageB!</div>,
});
