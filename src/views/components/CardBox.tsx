import { useState } from "react";
import { MdDelete } from "react-icons/md";

export function CardBox() {
	return (
		<div className="flex flex-col gap-2.5 w-80">
			<div className="flex-grow flex justify-center p-4 bg-white dark:bg-bio-contraste/25 rounded-lg shadow-md hover:bg-bio-contraste/50 relative">
				<img
					className="w-64 object-contain"
					src="/assets/Orange.png"
					alt="Orange Juice"
				/>
				<button className="w-full font-black bg-bio text-bio-contraste rounded-b-lg hover:bg-bio-contraste p-2 absolute bottom-0 left-0 cursor-pointer">
					AJOUTER AU PANIER
				</button>
			</div>
			<div>
				<h2 className="text-lg font-black">
					Boisson à bénéfices - Défenses
				</h2>
				<p>800 FCFA</p>
			</div>
		</div>
	);
}

export function CardCart({className}: {readonly className?: string}) {
	const [qte, setQte] = useState(1);
	return (
		<div className={`flex gap-2 p-4 ${className}`}>
			<img
				className="w-[100px] h-[100px] object-contain"
				src="/assets/fraise.avif"
				alt="Produit sélectionné"
			/>
			<div className="flex flex-grow flex-col gap-2">
				<h2 className="text-lg font-black">Boisson à bénéfices</h2>
				<p className="text-sm">800 FCFA</p>
				<div className="flex justify-between items-end">
					<div className="flex gap-2 border-1 w-fit p-2">
						<button
							className="mx-2 cursor-pointer"
							onClick={() => {
								if (qte > 1) {
									setQte(qte - 1);
								}
							}}
						>
							-
						</button>
						<span>{qte}</span>
						<button
							onClick={() => {
								setQte(qte + 1);
							}}
							className="mx-2 cursor-pointer"
						>
							+
						</button>
					</div>
					<MdDelete className="text-red-500 text-2xl" />
				</div>
			</div>
		</div>
	);
}
