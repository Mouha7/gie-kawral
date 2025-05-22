import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { BtnCustom } from "./BtnCustom";

// Fonction utilitaire pour les styles de NavLink
const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
	isActive
		? "rounded-[8px] p-2 dark:bg-kawral-red text-white font-bold"
		: "rounded-[8px] p-2 hover:bg-kawral-red hover:text-white font-bold";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	// Ferme le menu si l'écran devient plus grand que md
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className="flex justify-between items-center px-4 sm:px-8 md:px-14 lg:px-20 py-2 sticky top-[-10px] z-50">
			<div>
				<NavLink to="/" className="flex items-center mt-4">
					<img
						className="w-14 h-auto"
						src="/assets/logo-kawral.png"
						alt="Logo"
					/>
				</NavLink>
			</div>

			{/* Navigation mobile et desktop */}
			<nav
				className={`${
					isOpen ? "fixed inset-0 top-16 bg-white/95 pt-6" : "hidden"
				} md:static md:flex md:pt-0 md:bg-transparent items-center justify-center transition-all duration-300`}
			>
				<ul className="md:w-fit md:flex w-full md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0 p-2.5 justify-center rounded-xl md:backdrop-blur-3xl">
					<li className="text-center">
						<NavLink
							to="/"
							className={navLinkStyles}
							onClick={() => setIsOpen(false)}
						>
							Accueil
						</NavLink>
					</li>
					<li className="text-center">
						<NavLink
							to="/catalogue/gamme-jus"
							className={navLinkStyles}
							onClick={() => setIsOpen(false)}
						>
							Nos produits
						</NavLink>
					</li>
					<li className="text-center">
						<NavLink
							to="/notre-histoire"
							className={navLinkStyles}
							onClick={() => setIsOpen(false)}
						>
							Notre histoire
						</NavLink>
					</li>
					<li className="text-center">
						<NavLink
							to="/contact"
							className={navLinkStyles}
							onClick={() => setIsOpen(false)}
						>
							Nos Contacts
						</NavLink>
					</li>
				</ul>
			</nav>

			{/* Icônes utilisateur, panier et menu hamburger */}
			<BtnCustom to="/catalogue/gamme-jus" text="Commander en ligne" />
		</header>
	);
}
