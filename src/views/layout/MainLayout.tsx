import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function MainLayout() {
	return (
		<div className="flex flex-col h-screen dark:bg-bio dark:text-black font-roboto overflow-auto">
			<Header />
			<main className="flex-grow dark:bg-bio py-4 md:px-14 sm:px-4">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
