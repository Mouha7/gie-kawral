import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactView() {
	return (
		<div className="flex flex-col items-center justify-center my-4">
			<h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
			<p className="">Nous sommes là pour vous aider !</p>
			<p className="mb-4">
				Vous pouvez nous contacter sur le site ou par téléphone au 000
				00 00, du lundi au vendredi de 8h à 16h, hors week-end et jours
				fériés.
			</p>
			<form className="flex flex-col gap-4 w-1/2">
				<div className="flex gap-4">
					<Input type="text" placeholder="Prénom" />
					<Input type="text" placeholder="Nom" />
				</div>
				<div className="flex gap-4">
					<Input type="text" placeholder="Rue/Quartier" />
					<Input type="text" placeholder="Ville" />
				</div>
				<Input type="email" placeholder="Email" />

				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Objet du message" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Objet du message</SelectLabel>
							<SelectItem value="compliment">Compliments</SelectItem>
							<SelectItem value="information">
								Information produit
							</SelectItem>
							<SelectItem value="produit">
								Commentaire produit
							</SelectItem>
							<SelectItem value="partenariat">
								Sponsoring & partenariat
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Textarea
					placeholder="Tell us a little bit about yourself"
					className="resize-none"
				/>
				<button className="dark:bg-bio-contraste text-bio font-bold py-2 px-4 hover:bg-bio-contraste/50 cursor-pointer">
					Envoyer
				</button>
			</form>
		</div>
	);
}
