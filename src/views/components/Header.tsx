import { NavLink } from "react-router-dom";
import { Cart } from "./CartCustom";
import { FaUser } from "react-icons/fa6";

// Fonction utilitaire pour les styles de NavLink
const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
	isActive
		? "rounded-[8px] p-2 dark:bg-red-100 font-bold"
		: "rounded-[8px] p-2 hover:bg-red-100 font-bold";

export function Header() {
	return (
		<header className="flex justify-between items-center px-14 py-2 sticky top-0 z-50">
			<div>
				<NavLink to="/" className="flex items-center">
					<img
						className="w-20 h-auto"
						src="/assets/logo.png"
						alt="Logo"
					/>
				</NavLink>
			</div>
			<nav className="flex justify-center">
				<ul className="w-fit flex space-x-4 p-2.5 justify-center rounded-xl backdrop-blur-3xl">
					<li>
						<NavLink to="/" className={navLinkStyles}>
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/catalogue/gamme-jus"
							className={navLinkStyles}
						>
							Nos produits
						</NavLink>
					</li>
					<li>
						<NavLink to="/fruits" className={navLinkStyles}>
							Nos fruits
						</NavLink>
					</li>
					<li>
						<NavLink to="/notre-histoire" className={navLinkStyles}>
							Notre histoire
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="flex justify-center gap-5 text-xl w-fit p-2.5 rounded-xl backdrop-blur-3xl">
				<NavLink to="/login">
					<FaUser />
				</NavLink>
				<Cart />
			</div>
		</header>
	);
}
