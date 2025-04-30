import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function LoginView() {
	return (
		<div className="flex flex-col items-center justify-center my-4">
			<h1 className="text-3xl font-bold mb-4">Connexion</h1>
			<form className="flex flex-col gap-4 w-1/2">
				<Input type="email" placeholder="Email" />
				<Input type="password" placeholder="Password" />
				<p className="">
					<Link
						to="/recovery"
						className="text-bio-contraste font-bold underline"
					>
						Mot de passe oublié?
					</Link>
				</p>
				<button className="dark:bg-bio-contraste text-bio font-bold py-2 px-4 hover:bg-bio-contraste/50 cursor-pointer">
					Envoyer
				</button>
				<p className="text-end">
					Pas encore de compte ?{" "}
					<Link
						to="/register"
						className="text-bio-contraste font-bold underline"
					>
						Créer un compte
					</Link>
				</p>
			</form>
		</div>
	);
}
