import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { useCount } from '../lib/count/useCountCTX';

interface RouterContext {
	count: number;
	increment: () => void;
	decrement: () => void;
}

export const Route = createRootRouteWithContext<RouterContext>()({
	beforeLoad: ({ context }) => {
		console.log('root: beforeLoad', context.count);
	},
	component: Root,
});

function Root() {
	const ctxAPI = useCount();
	const ctxRoute = Route.useRouteContext();
	return (
		<div className='grid place-content-stretch'>
			<div className='grid grid-flow-col max-w-lg mx-auto'>
				<div className='border border-black/10 p-4 rounded-md hover:bg-black/5 text-center'>
					<div>{ctxAPI.count}</div>
					<div>context api</div>
				</div>
				<div className='border border-black/10 p-4 rounded-md hover:bg-black/5 text-center'>
					<div>{ctxRoute.count}</div>
					<div>context api</div>
				</div>
			</div>
			<div className='w-full h-24 flex gap-2 items-center justify-center'>
				<div>
					<button
						onClick={() => ctxAPI.increment()}
						className='p-2 border border-black/5 rounded-md hover:bg-blue-200 '
					>
						context api: increment ++
					</button>
					<button
						onClick={() => ctxAPI.decrement()}
						className='p-2 border border-black/5 rounded-md hover:bg-blue-200 '
					>
						context api: decrement --
					</button>
				</div>
				<div>
					<button
						onClick={() => ctxRoute.increment()}
						className='p-2 border border-black/5 rounded-md hover:bg-red-200 '
					>
						context route: increment ++
					</button>
					<button
						onClick={() => ctxRoute.decrement()}
						className='p-2 border border-black/5 rounded-md hover:bg-red-200 '
					>
						context route: decrement --
					</button>
				</div>
			</div>
			<div className='flex gap-2 mx-auto'>
				<Link to='/' className='[&.active]:font-bold bg-blue-300 rounded-md p-2'>
					Home
				</Link>
				<Link to='/pageA' className='[&.active]:font-bold bg-orange-300 rounded-md p-2'>
					Page A
				</Link>
				<Link to='/pageB' className='[&.active]:font-bold bg-purple-300 rounded-md p-2'>
					Page B
				</Link>
			</div>

			<Outlet />
			<TanStackRouterDevtools />
		</div>
	);
}
