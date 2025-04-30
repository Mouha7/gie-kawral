import { Input } from "@/components/ui/input";
import { BtnLightCustom } from "./components/BtnCustom";

export function RecoveryView() {
	return (
		<div className="flex flex-col items-center justify-center my-4">
			<h1 className="text-3xl font-bold mb-4">
				Réinitialiser son mot de passe
			</h1>
			<p className="text-center">
				Nous vous ferons parvenir un e-mail pour réinitialiser votre mot
				de passe
			</p>
			<form className="flex flex-col gap-4 w-1/2 items-center my-4">
				<Input type="email" placeholder="Email" />
				<div className="flex gap-4">
					<button className="dark:bg-bio-contraste text-bio font-bold py-2 px-4 hover:bg-bio-contraste/50 cursor-pointer">
						Envoyer
					</button>
					<BtnLightCustom to="/login" className="border" text="Annuler" />
				</div>
			</form>
		</div>
	);
}
