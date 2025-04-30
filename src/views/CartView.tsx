import { Button } from "@/components/ui/button";
import { CardCart } from "./components/CardBox";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { Link } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function CartView() {
	return (
		<div className="flex items-center my-4 gap-20">
			<div className="flex-grow flex flex-col justify-center my-4">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<Link to="/">Accueil</Link>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<Slash />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbPage className="font-bold">
								Panier
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<h1 className="text-3xl font-bold mb-4">Votre Panier</h1>
				<div className="flex flex-col gap-4 mt-4">
					<CardCart className="border-b-1 border-bio-contraste/15" />
					<CardCart className="border-b-1 border-bio-contraste/15" />
				</div>
			</div>
			<div className="w-1/4 flex flex-col gap-4 p-4 rounded-lg">
				<div className="flex justify-between items-center">
					<h3 className="font-bold">Sous-total</h3>
					<p>800 FCFA</p>
				</div>
				<div className="flex justify-between items-center">
					<h3 className="font-bold">TVA (20%)</h3>
					<p>160 FCFA</p>
				</div>
				<div className="flex justify-between items-center">
					<h3 className="font-bold">Total</h3>
					<p>960 FCFA</p>
				</div>
				<div className="flex justify-between items-center">
					<RadioGroup defaultValue="domicile">
						<div className="flex items-center space-x-2 cursor-pointer">
							<RadioGroupItem className="cursor-pointer" value="domicile" id="r1" />
							<Label htmlFor="r1" className="cursor-pointer">Livraison à domicile <span className="text-sm font-light">(à partir 3500 FCFA)</span></Label>
						</div>
						<div className="flex items-center space-x-2 ">
							<RadioGroupItem className="cursor-pointer" value="relai" id="r2" />
							<Label htmlFor="r2" className="cursor-pointer">Point de relais <span className="text-sm font-light">(à partir 1500 FCFA)</span></Label>
						</div>
					</RadioGroup>
				</div>
				<Button
					className="dark:bg-bio-contraste dark:text-bio uppercase rounded-none cursor-pointer mt-2"
					type="submit"
				>
					Procéder au paiement
				</Button>
			</div>
		</div>
	);
}
