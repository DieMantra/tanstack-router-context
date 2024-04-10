import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { useCount } from './lib/count/useCountCTX';
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({
	routeTree,
	context: {
		count: undefined!,
		increment: undefined!,
		decrement: undefined!,
	},
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

function App() {
	const countCTX = useCount();

	return (
		<RouterProvider
			router={router}
			context={{
				...countCTX,
			}}
		/>
	);
}

export default App;
