import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	beforeLoad: ({ context }) => {
		// If you update the state of the context using the increment function
		// The state in Route.useRouteContext() will not but up to date, until you navigate to another route
		context.increment();
		console.log('index /: beforeLoad', context.count);
	},
	component: () => <div>Hello /!</div>,
});
