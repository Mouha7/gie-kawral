import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function MainLayout() {
	return (
		<div className="flex flex-col h-screen dark:bg-bio dark:text-bio-contraste font-roboto overflow-auto">
			<Header />
			<main className="flex-grow dark:bg-bio p-4">
				<Outlet />
			</main>
			<footer className="dark:bg-bio p-4">
				<p>Footer content goes here.</p>
			</footer>
		</div>
	);
}
