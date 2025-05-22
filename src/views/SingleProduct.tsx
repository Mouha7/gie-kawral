import { BtnCustom } from "./components/BtnCustom";

export function SingleProduct() {
	return (
		<section className="py-8 md:py-16 antialiased">
			<div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
				<div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
					<div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
						<img
							className="w-full block"
							src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
							alt=""
						/>
					</div>

					<div className="mt-6 sm:mt-8 lg:mt-0">
						<h1 className="text-xl font-semibold sm:text-2xl">
							Jus de mangue
						</h1>
						<div className="mt-4 sm:items-center sm:gap-4 sm:flex">
							<p className="text-2xl font-extrabold sm:text-3xl">
								1500 FCFA
							</p>

							<div className="flex items-center gap-2 mt-2 sm:mt-0">
								<div className="flex items-center gap-1">
									<svg
										className="w-4 h-4 text-kawral-yellow"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
									</svg>
									<svg
										className="w-4 h-4 text-kawral-yellow"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
									</svg>
									<svg
										className="w-4 h-4 text-kawral-yellow"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
									</svg>
									<svg
										className="w-4 h-4 text-kawral-yellow"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
									</svg>
									<svg
										className="w-4 h-4 text-kawral-yellow"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
									</svg>
								</div>
								<p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
									(5.0)
								</p>
							</div>
						</div>

						<div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
							<BtnCustom to="" text="Commander" />
						</div>

						<hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

						<p className="mb-6">
							Sélection rigoureuse d'oranges fraîches de Casamance
							pour une saveur éclatante et authentique. Procédé
							d'extraction à froid préservant tous les nutriments
							essentiels et la richesse aromatique du fruit. Sans
							conservateurs ni colorants artificiels.
							Concentration exceptionnelle en vitamine C
							naturelle, jusqu'à 70% des apports journaliers
							recommandés par verre. Embouteillage artisanal dans
							notre atelier familial certifié aux normes
							alimentaires internationales. Expérience gustative
							incomparable, alliance parfaite entre douceur
							naturelle et notes acidulées rafraîchissantes.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
