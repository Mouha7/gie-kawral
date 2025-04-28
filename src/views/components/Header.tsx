import { NavLink } from "react-router-dom";

export function Header() {
	return (
		<header className="text-bio-contraste flex items-center px-4">
			<div>
				<NavLink to="/" className="flex items-center">
					<img
						className="w-20 h-auto"
						src="/assets/logo.png"
						alt="Logo"
					/>
				</NavLink>
			</div>
			<nav className="flex-grow flex justify-center sticky top-2 z-50">
				<ul className="w-fit flex space-x-4 p-2.5 justify-center rounded-xl bg-red-400">
					<li>
						<NavLink to="/" className="rounded-[8px] p-1 hover:bg-red-100">
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink to="/catalogue/gamme-jus" className="rounded-[8px] p-1 hover:bg-red-100">
							Nos Produits
						</NavLink>
					</li>
					<li>
						<NavLink to="/fruits" className="rounded-[8px] p-1 hover:bg-red-100">
							Nos Fruits
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
