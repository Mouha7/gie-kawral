import { SlSocialFacebook } from "react-icons/sl";
import { PiTiktokLogo } from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

export function Footer() {
	return (
		<footer className="dark:bg-bio p-4">
			<div className="flex justify-between px-14 py-4">
				<Link to="/" className="flex items-center flex-grow">
					<img
						className="w-24 object-contain h-auto"
						loading="lazy"
						src="/assets/logo-kawral.png"
						alt="Logo Entreprise"
					/>
				</Link>
				<div className="flex-grow flex flex-col gap-2">
					<h2 className="text-xl font-bold uppercase">Gie Kawral</h2>
					<NavLink to="/notre-histoire" className="hover:underline">
						Notre histoire
					</NavLink>
					<NavLink to="" className="hover:underline">
						Nos missions
					</NavLink>
					<NavLink to="" className="hover:underline">
						Nos engagements
					</NavLink>
				</div>
				<div className="flex-grow flex flex-col gap-2">
					<h2 className="text-xl font-bold uppercase">Contact</h2>
					<NavLink to="/contact" className="hover:underline">
						Formulaire de Contact
					</NavLink>
					<p>Téléphone: (+221) 77 555 31 61</p>
					<p>Email: gie_kawral@yahoo.fr</p>
					<div className="flex gap-2 items-center">
						<NavLink
							target="_blank"
							to="https://www.facebook.com/mbourecoumba"
						>
							<SlSocialFacebook className="text-xl" />
						</NavLink>
						<NavLink
							target="_blank"
							to="https://www.instagram.com/gie_kawral?igsh=MTBseDlvMTBpNno4ZQ=="
						>
							<BsInstagram className="text-xl" />
						</NavLink>
						<PiTiktokLogo className="text-xl" />
					</div>
				</div>
				<div className="flex-grow flex flex-col gap-2">
					<h2 className="text-xl font-bold uppercase">Aide</h2>
					<NavLink to="" className="hover:underline">
						Politique de confidentialité
					</NavLink>
					<NavLink to="" className="hover:underline">
						Conditions d'utilisation
					</NavLink>
					<NavLink to="" className="hover:underline">
						Mention légale
					</NavLink>
				</div>
				<div className="flex-grow flex flex-col gap-2">
					<h2 className="text-xl font-bold uppercase">
						Paiement sécurisé
					</h2>
					<div className="flex gap-2 items-center">
						<img
							className="w-[34px] h-[24px] border-1 rounded object-contain"
							src="/assets/om.jpg"
							alt="Orange Money"
						/>
						<img
							className="w-[34px] h-[24px] border-1 rounded object-contain"
							src="/assets/wave.jpg"
							alt="Wave"
						/>
						<img
							className="w-[34px] h-[24px] border-1 rounded object-contain"
							src="/assets/fm.png"
							alt="Free Money"
						/>
						<CiDeliveryTruck className="w-[34px] h-[24px] border-1 rounded object-contain" />
					</div>
				</div>
			</div>
			<p className="text-center py-2.5 text-sm">
				&copy; {new Date().getFullYear()} Gie Kawral. Tous droits réservés.
				Réalisation:{" "}
				<NavLink to="" className="hover:underline">
					SMRS
				</NavLink>
			</p>
		</footer>
	);
}
