import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function RegisterView() {
	return (
		<div className="flex flex-col items-center justify-center my-4">
			<h1 className="text-3xl font-bold mb-4">Créer un compte</h1>
			<form className="flex flex-col gap-4 w-1/2">
				<div className="flex gap-4">
					<Input type="text" placeholder="Prénom" />
					<Input type="text" placeholder="Nom de famille" />
				</div>
				<div className="flex gap-4">
					<Input type="text" placeholder="Rue/Quartier" />
					<Input type="text" placeholder="Ville" />
				</div>
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Mot de passe" />
				<p className="text-end">
                Avez-vous déjà un compte ?{" "}
					<Link
						to="/login"
						className="text-bio-contraste font-bold underline"
					>
						Connectez-vous
					</Link>
				</p>
				<button className="dark:bg-bio-contraste text-bio font-bold py-2 px-4 hover:bg-bio-contraste/50 cursor-pointer">
					Envoyer
				</button>
			</form>
		</div>
	);
}
