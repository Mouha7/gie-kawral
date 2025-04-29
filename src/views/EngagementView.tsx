export function EngagementView() {
	return (
		<div className="flex flex-col w-full justify-center items-center">
			<div className="mt-4 bg-cover bg-center bg-[url('/assets/bg-fruits.jpg')] bg-no-repeat h-[570px] w-7xl shadow-lg">
				<div className="flex flex-col justify-center items-center gap-5 h-full dark:bg-black/50 text-white p-5">
					<h1 className="text-4xl font-black">Nos engagements</h1>
					<p className="text-center w-[766px]">
						Nous avons à cœur de tracer la voie d'un avenir durable
						pour les générations à venir. Nous respectons autant
						l'environnement que les producteurs avec qui nous
						travaillons. Et bien sûr, les familles belges qui nous
						font confiance.
					</p>
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
							Un avenir durable, pour tous
						</h3>
						<p>
							Chez BioNature, nous sommes convaincus que la
							valorisation des ressources locales est la clé d’un
							avenir durable. Nous respectons autant la nature qui
							nous offre ses fruits que les producteurs et les
							familles sénégalaises qui nous font confiance au
							quotidien.
						</p>
					</div>
				</div>
				<div className="flex items-center py-16">
					<div className="pr-40 space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							Réduire notre impact environnemental
						</h3>
						<p>
							La nature nous offre ses plus beaux trésors, et il
							est de notre responsabilité de protéger cet
							équilibre.
							<br />
							<br />
							Ainsi, notre unité de transformation à Ziguinchor a
							été pensée pour minimiser son impact écologique.
							Depuis son ouverture en 2026, nous avons réduit de
							manière significative notre consommation d’énergie
							grâce à des équipements modernes et économes.
							<br />
							<br />
							Nous avons également mis en place une politique
							proactive de gestion des déchets : 85% de nos
							déchets sont revalorisés, et un système interne nous
							permet de traiter nos eaux usées de manière durable.
							De plus, une grande partie de nos emballages sont
							conçus pour être recyclables, en accord avec notre
							vision écologique.
						</p>
					</div>
					<img
						src="/assets/Drapeau-Senegal.webp"
						alt="Article Fruit"
						loading="lazy"
						className="pf-40 object-cover"
					/>
				</div>
				<div className="flex items-center py-16">
					<img
						src="/assets/Drapeau-Senegal.webp"
						alt="Article Fruits"
						loading="lazy"
						className="pr-40 object-cover"
					/>
					<div className="pf-40 space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							Valoriser les ressources locales et internationales
							de manière responsable
						</h3>
						<p>
							BioNature est fière de collaborer avec des
							producteurs locaux sénégalais, favorisant ainsi une
							économie circulaire et durable. Nos mangues, ananas
							et citrons proviennent principalement de Casamance
							et de Thiès, avec des méthodes de culture
							respectueuses de l’environnement.
							<br />
							<br />
							Pour les ingrédients que nous ne pouvons trouver
							localement, nous travaillons exclusivement avec des
							partenaires partageant nos valeurs. Ces fournisseurs
							respectent des cahiers des charges stricts en
							matière de traçabilité, de qualité et de
							responsabilité sociale.
						</p>
					</div>
				</div>
				<div className="flex items-center py-16">
					<div className="pr-40 space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							Des produits sains pour des plaisirs sains
						</h3>
						<p>
							Respecter la nature, c'est aussi respecter ceux qui
							consomment nos produits. Chez BioNature, nous
							n’ajoutons ni colorant, ni arôme artificiel à nos
							recettes.
							<br />
							<br />
							Nos jus sont conçus sans sucre ajouté, pour
							préserver toute la richesse et la fraîcheur des
							fruits tropicaux. Quant à notre gamme Bio, elle
							respecte les normes d’agriculture biologique
							certifiées, garantissant des produits sans pesticide
							et en harmonie avec l’environnement.
							<br />
							<br />
							Avec BioNature, chaque produit est une célébration
							des fruits du Sénégal, un hommage à leur naturalité
							et un engagement envers un avenir plus sain pour
							tous.
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
