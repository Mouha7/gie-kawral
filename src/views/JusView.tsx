import { TrashIcon } from "@heroicons/react/16/solid";
import { AccordionCustom } from "./components/AccordionCustom";
import { CardBox } from "./components/CardBox";
import { SelectTri } from "./components/SelectCustom";
import { Banner } from "./components/BannerCustom";

export function JusView() {
	return (
		<div className="flex flex-col w-full">
			<div className="mt-4 bg-[url('/assets/bg-fruits.jpg')] bg-cover bg-center bg-no-repeat h-96 w-full shadow-lg">
				<div className="flex flex-col justify-center gap-5 h-full dark:bg-black/50 text-white p-5">
					<h1 className="text-5xl font-black">
						Découvrez notre gamme de <br /> jus et boissons
					</h1>
					<p className="text-base">
						Que vous soyez jus frais au petit déjeuner ou repas à la
						fête, fruitez vos journées avec Materne !
					</p>
				</div>
			</div>

			<div className="flex gap-5 h-3/6 w-full mt-7">
				<div className="w-96 flex flex-col gap-2.5 p-2">
					<div className="flex justify-between items-center">
						<p className="font-bold">Filtrer :</p>
						<button className="flex justify-center items-start gap-2.5 bg-red-500 text-white rounded-lg p-2 hover:bg-red-600 pointer">
							<TrashIcon className="h-5 w-5 inline" /> Supprimer
						</button>
					</div>
					<div>
						<p>20 produits</p>
					</div>
					<div>
						<AccordionCustom />
					</div>
				</div>

				<div className="flex flex-col gap-2.5 w-full">
					<div className="self-end flex items-center gap-2.5 p-2">
						<span className="font-bold">Trier par : </span>
						<SelectTri />
					</div>
					<div className="flex-grow flex justify-between flex-wrap gap-y-4 p-2">
						<CardBox />
						<CardBox />
						<CardBox />
						<CardBox />
					</div>
				</div>
			</div>

			<Banner />
		</div>
	);
}
