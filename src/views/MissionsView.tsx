export function MissionsView() {
	return (
		<div className="flex flex-col w-full justify-center items-center">
			<div className="mt-4 bg-cover bg-center bg-[url('/assets/bg-fruits.jpg')] bg-no-repeat h-[570px] w-7xl shadow-lg">
				<div className="flex flex-col justify-center items-center gap-5 h-full dark:bg-black/50 text-white p-5">
					<h1 className="text-4xl font-black">
						L’ADN de BioNature : naturalité & impact local
					</h1>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7 px-14">
				<div className="flex items-center py-16">
					<img
						src="/assets/Drapeau-Senegal.webp"
						alt="Drapeau du Sénégal"
						loading="lazy"
						className="pr-40 object-cover"
					/>
					<div className="pf-40 space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							Qualité et expertise,
							<br />2 mots indissociables chez BioNature
						</h3>
						<p>
							Depuis sa création en 2025, BioNature s'engage à
							offrir le meilleur des fruits tropicaux du Sénégal,
							en valorisant leur immense potentiel nutritif et
							gustatif.
							<br />
							<br />
							Pour y parvenir, nous appliquons une charte de
							qualité stricte à chaque étape de notre processus,
							de la sélection minutieuse des producteurs
							sénégalais avec qui nous collaborons, à
							l’élaboration de recettes qui respectent la
							spécificité et la saisonnalité de chaque fruit.
						</p>
					</div>
				</div>
				<div className="flex items-center py-16">
					<div className="pr-40 space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							BioNature, au cœur des communautés
						</h3>
						<p>
							Fidèle à notre mission, BioNature ne se limite pas à
							transformer les fruits. Nous aspirons à être un
							acteur engagé dans le développement du Sénégal, en
							créant des emplois durables, en soutenant les
							agriculteurs locaux et en adoptant des pratiques
							respectueuses de l’environnement.
							<br />
							<br />
							Nous croyons fermement que promouvoir les richesses
							naturelles locales contribue non seulement à une
							alimentation plus saine et durable, mais aussi à
							renforcer les communautés qui en dépendent.
						</p>
					</div>
					<img
						src="/assets/Drapeau-Senegal.webp"
						alt="Article Fruit"
						loading="lazy"
						className="pf-40 object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
