import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { FaCartShopping } from "react-icons/fa6";
import { CardCart } from "./CardBox";
import { Link } from "react-router-dom";

export function Cart() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<FaCartShopping />
			</SheetTrigger>
			<SheetContent className="dark:bg-bio dark:text-bio-contraste p-6">
				<SheetHeader className="border-bottom">
					<SheetTitle>Votre panier(nbr d'items)</SheetTitle>
				</SheetHeader>

				<div className="h-full overflow-auto border-bottom">
					<CardCart />
					<CardCart />
				</div>

				<SheetFooter>
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
					<Button
						className="dark:bg-bio-contraste dark:text-bio uppercase rounded-none cursor-pointer mt-2"
						type="submit"
					>
						Procéder au paiement
					</Button>
					<SheetClose asChild>
						<Link
							className="text-center font-bold underline"
							to="/panier"
						>
							Voir le panier
						</Link>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
