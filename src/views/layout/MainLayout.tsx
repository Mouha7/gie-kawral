import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function MainLayout() {
	return (
		<div className="flex flex-col h-screen dark:bg-bio dark:text-bio-contraste font-roboto overflow-auto">
			<Header />
			<main className="flex-grow dark:bg-bio py-4 px-14">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
