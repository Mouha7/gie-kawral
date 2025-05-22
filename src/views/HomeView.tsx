import { Link } from "react-router-dom";
import { BtnCustom } from "./components/BtnCustom";
import { CarouselSize } from "./components/CarouselSize";
import { Banner } from "./components/BannerCustom";
import bannerKawral from "/assets/Banner-Kawral.png";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@radix-ui/react-tooltip";

export function HomeView() {
	return (
		<div className="flex flex-col w-full">
			<div
				className="fully-style bg-cover bg-center bg-no-repeat h-[570px] w-full shadow-lg"
				style={{ backgroundImage: `url(${bannerKawral})` }}
			>
				<div className="flex flex-col justify-center gap-5 h-full dark:bg-black/50 text-white py-5 md:px-14 lg:px-20">
					<h1 className="text-4xl font-black uppercase">
						Bienvenue chez Kawral
					</h1>
					<p>Le meilleur des fruits et céréales du Sénégal</p>
					<BtnCustom to="/catalogue/gamme-jus" text="Miam, Je Commande !" />
				</div>
			</div>

			<div className="flex flex-col items-center gap-5 h-3/6 w-full my-7">
				<h2 className="my-5 text-3xl font-bold uppercase">
					Kawral, une histoire de famille Africaine
				</h2>

				<div className="flex justify-between">
					<div className="flex flex-col items-center gap-5 p-5 w-96">
						<img
							src="/assets/Drapeau-Senegal.webp"
							alt="Drapeau du Sénégal"
							className="w-32 h-32 object-cover rounded-[8px]"
						/>
						<p className="text-3xl font-bold uppercase">Sénégal</p>
						<p className="text-base text-center">
							Gie Kawral est une entreprise familiale qui se
							consacre à la production de jus de fruits naturels
							et de boissons saines. Nous croyons en la puissance
							des ingrédients naturels pour nourrir le corps et
							l'esprit.
						</p>
					</div>
					<div className="flex flex-col items-center gap-5 p-5 w-96">
						<img
							src="/assets/logo-kawral.png"
							alt="Drapeau du Sénégal"
							className="w-32 h-32 object-cover rounded-[8px]"
						/>
						<p className="text-3xl font-bold uppercase">Kawral</p>
						<p className="text-base text-center">
							Gie Kawral est née pour valoriser les fruits tropicaux
							sous-exploités du Sénégal en créant une chaîne de
							valeur inclusive et équitable. Elle vise à
							transformer ces ressources en produits naturels et
							nutritifs tout en soutenant les producteurs locaux
							avec des pratiques durables. L'entreprise incarne
							l'engagement envers l'impact social, économique et
							environnemental.
						</p>
					</div>
					<div className="flex flex-col items-center gap-5 p-5 w-96">
						<img
							src="/assets/top-one.png"
							alt="Drapeau du Sénégal"
							className="w-32 h-32 object-cover rounded-[8px]"
						/>
						<p className="text-3xl font-bold uppercase">Leader</p>
						<p className="text-base text-center">
							Faire de Kawral le numéro un mondial, en alliant
							excellence, impact durable et innovation au service
							de tous.
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-5 h-3/6 w-full my-7">
				<h2 className="text-3xl font-bold uppercase">Nos produits</h2>
				<p className="w-5xl">
					Pour toutes les envies, tous les âges et tous les moments de
					la journée, il y a toujours un produit BioNature fait pour
					vous. Le plaisir des fruits tropicaux sous toutes leurs
					formes, à savourer en solo, en famille ou avec vos proches,
					tout en respectant la nature et les producteurs locaux.
				</p>
				<div className="flex justify-between">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Link to="">
									<div className="flex relative items-center gap-5 p-5 w-80">
										<img
											className="object-cover h-[500px] rounded-[8px]"
											src="/assets/jus.jpg"
											alt="Orange Juice"
										/>
										<span className="absolute top-5 left-1/2 rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 w-fit bg-black/50 text-white text-center py-2 px-4 uppercase">
											Jus
										</span>
									</div>
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Voir Plus</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Link to="">
									<div className="flex relative items-center gap-5 p-5 w-80">
										<img
											className="object-cover h-[500px] rounded-[8px]"
											src="/assets/conf.jpg"
											alt="Confiture"
										/>
										<span className="absolute top-5 left-1/2 rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 w-fit bg-black/50 text-white text-center py-2 px-4 uppercase">
											Confiture
										</span>
									</div>
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Voir Plus</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Link to="">
									<div className="flex relative items-center gap-5 p-5 w-80">
										<img
											className="object-cover h-[500px] rounded-[8px]"
											src="/assets/cereal.jpg"
											alt="Orange Juice"
										/>
										<span className="absolute top-5 left-1/2 rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 w-fit bg-black/50 text-white text-center py-2 px-4 uppercase">
											Céréales
										</span>
									</div>
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>Voir Plus</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</div>

			<div className="flex flex-col gap-5 h-3/6 w-full my-7">
				<h2 className="text-3xl font-bold uppercase text-center">
					#Merci Pour Vos Témoignages
				</h2>
				<div className="flex w-full justify-center">
					<CarouselSize imgSrc="/assets/Orange.png" />
				</div>
			</div>
			<Banner />
		</div>
	);
}
