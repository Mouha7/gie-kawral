import { NavLink } from "react-router-dom";
import { BtnLightCustom } from "./components/BtnCustom";
import { CarouselSize } from "./components/CarouselSize";

const fruits = [
	{
		name: "pomme",
		image: "/assets/banane.avif",
	},
	{
		name: "ananas",
		image: "/assets/ananas.avif",
	},
	{
		name: "citron",
		image: "/assets/fraise.avif",
	},
	{
		name: "orange",
		image: "/assets/orange.avif",
	},
	{
		name: "mangue",
		image: "/assets/orange.avif",
	},
];

export function FruitView() {
	return (
		<div className="flex flex-col w-full">
			<div className="mx-[-56px] w-[calc(100%+112px)] bg-[url('/assets/bg-fruits.jpg')] bg-cover bg-center bg-no-repeat h-96 shadow-lg">
				<div className="flex flex-col justify-center items-center h-full dark:bg-black/50 text-white p-5">
					<div className="w-2xl flex flex-col justify-center items-center gap-5">
						<h1 className="text-4xl font-black uppercase text-center">
							BIONATURE, ça vient du cœur. Merci les fruits.
						</h1>
						<p className="text-center">
							Source de vie, de plaisir et de bien-être, les
							fruits tropicaux occupent une place essentielle dans
							notre alimentation… et dans nos engagements. Chez
							BioNature, ils sont notre raison d’être et l’âme de
							notre mission depuis le premier jour.
						</p>
						<BtnLightCustom
							to="/catalogue/gamme-jus"
							className="uppercase"
							text="Découvrez notre gamme"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7">
				<div className="w-5xl mx-16 flex flex-col justify-center items-center gap-5">
					<h2 className="text-3xl font-bold uppercase text-center">
						Nos fruits
					</h2>
					<p className="text-center">
						BioNature, c’est avant tout une histoire de fruits.
						Fruits tropicaux, fruits de saison, fruits de la terre,
						fruits de l’amour. Nous avons à cœur de vous faire
						découvrir les trésors que nous offre la nature.
					</p>
				</div>

				<div className="w-7xl flex flex-wrap gap-16">
					{fruits.map((fruit) => (
						<NavLink
							to={`/fruits/${fruit.name}`}
							key={fruit.name}
							className="w-96 flex flex-col items-center gap-5"
						>
							<img
								src={fruit.image}
								alt={fruit.name}
								loading="lazy"
								className="w-32 object-cover rounded-lg"
							/>
							<h2 className="text-3xl font-bold uppercase mb-12">
								{fruit.name}
							</h2>
						</NavLink>
					))}
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7">
				<div className="mx-16 flex flex-col justify-center items-center gap-12">
					<h2 className="text-3xl font-bold uppercase text-center">
						Les fruits Materne, c'est
					</h2>
					<div className="flex justify-center gap-12">
						<div className="flex justify-between">
							<div className="w-96 flex flex-col items-center gap-5">
								<img
									className="w-44 h-44 rounded-full object-cover "
									src="/assets/bg-fraise.webp"
									alt="Background Fraise"
								/>
								<h2 className="text-3xl font-bold uppercase text-center">
									100% d'exigence
								</h2>
								<p className="text-center">
									Nous nous fournissons auprès de partenaires
									de confiance suivant un cahier des charges
									très strict. Ils partagent notre respect de
									la nature et des valeurs éthiques.
								</p>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="w-96 flex flex-col items-center gap-5">
								<img
									className="w-44 h-44 rounded-full object-cover "
									src="/assets/bg-fraise.webp"
									alt="Background Fraise"
								/>
								<h2 className="text-3xl font-bold uppercase text-center">
									Zéro défaut
								</h2>
								<p className="text-center">
									Texture, couleur, goût... si un fruit n’est
									pas conforme à nos normes de qualité, il est
									rejeté. Materne oblige !
								</p>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="w-96 flex flex-col items-center gap-5">
								<img
									className="w-44 h-44 rounded-full object-cover "
									src="/assets/bg-fraise.webp"
									alt="Background Fraise"
								/>
								<h2 className="text-3xl font-bold uppercase text-center">
									Beaucoup de produits
								</h2>
								<p className="text-center">
									Pour satisfaire toutes les envies, notre
									assortiment continue de s'agrandir. Eh oui,
									quand on aime on ne compte pas !
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7 px-14">
				<h2 className="text-3xl font-bold uppercase text-center">
					La qualité, ça nous tient à coeur
				</h2>
				<div className="flex items-center py-16">
					<img
						src="/assets/article01-fruit.jpg"
						alt="Article Fruit Fraise"
						className="pr-40"
					/>
					<div className="pf-40 space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							Du champ à votre table
						</h3>
						<p>
							Depuis sa création, BioNature transforme les
							meilleurs fruits tropicaux issus de filières locales
							soigneusement choisies. Nos procédés innovants et
							respectueux de l’environnement capturent et
							préservent toute la richesse naturelle des saveurs
							et bienfaits des fruits.
							<br /> Par respect pour la nature, nos producteurs…
							et nos consommateurs.
						</p>
					</div>
				</div>
				<div className="flex items-center py-16">
					<div className="pr-40 space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							Une qualité garantie, tout au long de l’année
						</h3>
						<p>
							Les fruits dépendent du bon-vouloir de la nature.
							Pour vous offrir la meilleure qualité tout au long
							de l’année, nos experts goûtent les arrivages de
							fruits et adaptent leurs recettes et préparations en
							conséquent. Toujours sans colorant, conservateur ou
							arôme ajouté, cela va de soi !
						</p>
					</div>
					<img
						src="/assets/article02-fruit.jpg"
						alt="Article Fruit Fraise"
						className="pf-40"
					/>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7 px-14">
				<h2 className="text-3xl font-bold uppercase text-center">
					Pour vous donner le fruit à la bouche
				</h2>
				<CarouselSize imgSrc="/assets/orange.avif" />
			</div>
		</div>
	);
}
