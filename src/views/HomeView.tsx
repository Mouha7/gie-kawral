import { Link } from "react-router-dom";
import { BtnCustom } from "./components/BtnCustom";
import { CarouselSize } from "./components/CarouselSize";
import { Banner } from "./components/BannerCustom";

export function HomeView() {
	return (
		<div className="flex flex-col w-full">
			<div className="mt-4 bg-[url('/assets/bg-fruits.jpg')] bg-cover bg-center bg-no-repeat h-96 w-full shadow-lg">
				<div className="flex flex-col justify-center gap-5 h-full dark:bg-black/50 text-white p-5">
					<h1 className="text-4xl font-black">
						BIENVENUE CHEZ BIONATURE
					</h1>
					<BtnCustom to="" text="MIAM, JE COMMANDE !" />
				</div>
			</div>

			<div className="flex flex-col items-center gap-5 h-3/6 w-full my-7 dark:bg-bio-contraste/25">
				<h2 className="my-5 text-3xl font-bold uppercase">
					BioNature, une histoire de famille Africaine
				</h2>

				<div className="flex justify-between">
					<div className="flex flex-col items-center gap-5 p-5 w-96">
						<img
							src="/assets/Drapeau-Senegal.webp"
							alt="Drapeau du Sénégal"
							className="w-32 h-32 object-cover rounded-full"
						/>
						<p className="text-3xl font-bold uppercase">Sénégal</p>
						<p className="text-base text-center">
							BioNature est une entreprise familiale qui se
							consacre à la production de jus de fruits naturels
							et de boissons saines. Nous croyons en la puissance
							des ingrédients naturels pour nourrir le corps et
							l'esprit.
						</p>
					</div>
					<div className="flex flex-col items-center gap-5 p-5 w-96">
						<img
							src="/assets/logo.png"
							alt="Drapeau du Sénégal"
							className="w-32 h-32 object-cover rounded-full"
						/>
						<p className="text-3xl font-bold uppercase">
							BioNature
						</p>
						<p className="text-base text-center">
							BioNature est née pour valoriser les fruits
							tropicaux sous-exploités du Sénégal en créant une
							chaîne de valeur inclusive et équitable. Elle vise à
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
							className="w-32 h-32 object-cover rounded-full"
						/>
						<p className="text-3xl font-bold uppercase">
							Numéro Un Mondial
						</p>
						<p className="text-base text-center">
							Faire de BioNature le numéro un mondial, en alliant
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
					<Link to="">
						<div className="flex relative items-center gap-5 p-5 w-80">
							<img
								className="object-cover"
								src="/assets/Orange.png"
								alt="Orange Juice"
							/>
							<span className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit bg-black/50 text-white text-center py-2 px-4 uppercase">
								Confiture
							</span>
						</div>
					</Link>
					<Link to="">
						<div className="flex relative items-center gap-5 p-5 w-80">
							<img
								className="object-cover"
								src="/assets/Orange.png"
								alt="Orange Juice"
							/>
							<span className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit bg-black/50 text-white text-center py-2 px-4 uppercase">
								Compotes
							</span>
						</div>
					</Link>
					<Link to="">
						<div className="flex relative items-center gap-5 p-5 w-80">
							<img
								className="object-cover"
								src="/assets/Orange.png"
								alt="Orange Juice"
							/>
							<span className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit bg-black/50 text-white text-center py-2 px-4 uppercase">
								Boissons
							</span>
						</div>
					</Link>
					<Link to="">
						<div className="flex relative items-center gap-5 p-5 w-80">
							<img
								className="object-cover"
								src="/assets/Orange.png"
								alt="Orange Juice"
							/>
							<span className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit bg-black/50 text-white text-center py-2 px-4 uppercase">
								Snacks
							</span>
						</div>
					</Link>
				</div>
			</div>

			<div className="flex flex-col gap-5 h-3/6 w-full my-7">
				<h2 className="text-3xl font-bold uppercase">
					Agissons ensemble contre le gaspillage !
				</h2>
				<p className="w-5xl">
					Chez Materne, nous essayons de lutter contre le gaspillage
					alimentaire à notre échelle. C'est pourquoi, nous vous
					proposons nos produits à date de consommation courte. Tout
					aussi bon et qualitatif mais à consommer rapidement.
				</p>
				<div className="flex gap-10">
					<Link to="">
						<div className="flex flex-col relative gap-2.5 w-80 h-full">
							<span className="absolute top-16 left-12 transform -translate-x-1/2 -translate-y-1/2 w-fit bg-amber-400 text-white text-center py-2 px-4">
								Épuisé
							</span>
							<img
								className="object-cover p-5"
								src="/assets/Orange.png"
								alt="Orange Juice"
							/>
							<p className="font-bold text-lg">
								Jus d'orange pressée - DLC 28/05/25
							</p>
							<p>
								<span className="font-light line-through">
									1500 FCFA
								</span>{" "}
								<span className="text-amber-400 font-bold">
									1000 FCFA
								</span>
							</p>
						</div>
					</Link>
					<Link to="">
						<div className="flex flex-col relative gap-2.5 w-80 h-full">
							<span className="absolute top-16 left-16 transform -translate-x-1/2 -translate-y-1/2 w-fit bg-amber-400 text-white text-center py-2 px-4">
								Disponible
							</span>
							<img
								className="object-cover p-5"
								src="/assets/Orange.png"
								alt="Orange Juice"
							/>
							<p className="font-bold text-lg">
								Jus d'orange pressée - DLC 28/05/25
							</p>
							<p>
								<span className="font-light line-through">
									1500 FCFA
								</span>{" "}
								<span className="text-amber-400 font-bold">
									1000 FCFA
								</span>
							</p>
						</div>
					</Link>
				</div>
				<BtnCustom
					to=""
					text="Toutes nos promotions à date de consommation courte"
					className="uppercase"
				/>
			</div>

			<div className="flex flex-col gap-5 h-3/6 w-full my-7">
				<h2 className="text-3xl font-bold uppercase text-center">
					#Merci Les Fruits
				</h2>
				<div className="flex w-full justify-center">
					<CarouselSize imgSrc="/assets/Orange.png" />
				</div>
			</div>

			<div className="flex flex-col gap-5 h-3/6 w-full my-7">
				<h2 className="text-3xl text-center font-bold uppercase">
					Bienvenue dans le plus grand magasin BioNature du Sénégal !
				</h2>
				<p className="text-center">
					Tous les avantages de notre eshop en un clin d'oeil :
				</p>
				<p className="text-center">
					Retrouvez notre <strong>assortiment complet</strong>
				</p>
				<p className="text-center">
					Profitez de l'<strong>envoi gratuit en Dakar</strong> à
					partir de 20 000 FCFA
				</p>
			</div>

			<Banner />
		</div>
	);
}
