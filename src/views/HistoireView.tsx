export function HistoireView() {
	return (
		<div className="flex flex-col w-full justify-center items-center">
			<div className="fully-style mt-4 bg-cover bg-center bg-[url('/assets/history.png')] bg-no-repeat h-[570px] w-7xl shadow-lg">
				<div className="flex flex-col justify-center items-center gap-5 h-full dark:bg-black/25 text-white p-5">
					<h1 className="text-4xl font-black">
						Gie Kawral, une histoire enracinée dans la nature
					</h1>
					<p className="text-center w-[766px]">
						Depuis sa création, Gie Kawral met la richesse des
						fruits tropicaux au service du bien-être et du plaisir
						pour toute la famille.
					</p>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7 px-14">
				<div className="flex justify-center items-center gap-40 py-16">
					<img
						src="/assets/family.jpeg"
						alt="Drapeau du Sénégal"
						loading="lazy"
						className="w-[500px] object-cover"
					/>
					<div className="space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							Il était une fois Kawral
						</h3>
						<p>
							Au cœur du Sénégal, terre riche en biodiversité
							tropicale, la famille Diop a donné naissance à GIE
							Kawral, une entreprise familiale vouée à valoriser
							les richesses agricoles locales tout en soutenant
							les producteurs sénégalais. Inspirée par les
							traditions ancestrales et la générosité de notre
							terroir, notre famille s'est donnée pour mission de
							proposer des produits authentiques, naturels et
							respectueux de notre environnement.
							<br />
							<br />
							L'aventure a commencé modestement, avec l'ambition
							de transformer nos trésors agricoles locaux en
							produits de qualité supérieure accessibles à tous.
							Des jus naturels de bissap, tamarin et baobab aux
							farines nutritives de mil et fonio, en passant par
							nos confitures traditionnelles, GIE Kawral se
							distingue par son engagement envers l'authenticité,
							la qualité artisanale et l'impact positif sur les
							communautés locales qui cultivent ces produits.
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-40 py-16">
					<div className="space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							Toujours plus d’innovation et de durabilité
						</h3>
						<p>
							Au fil des années, notre entreprise familiale a
							constamment évolué pour répondre aux attentes des
							consommateurs sénégalais et internationaux. Nous
							avons progressivement enrichi notre gamme avec des
							produits innovants comme nos jus combinant plusieurs
							fruits locaux et nos préparations céréalières
							enrichies aux superfruits sénégalais.
							<br />
							<br />
							Notre engagement s'est également traduit par une
							attention particulière portée à nos emballages, avec
							l'adoption progressive de solutions plus écologiques
							et respectueuses de l'environnement. Parallèlement,
							GIE Kawral a étendu sa présence au-delà des marchés
							locaux, faisant rayonner les saveurs authentiques du
							Sénégal auprès de la diaspora et des amateurs de
							produits africains de qualité à travers le continent
							et au-delà.
						</p>
					</div>
					<img
						src="/assets/plus.jpeg"
						alt="Article Fruits"
						loading="lazy"
						className="w-[500px] object-cover"
					/>
				</div>
				<div className="flex justify-center items-center gap-40 py-16">
					<img
						src="/assets/take.png"
						alt="Article Fruit"
						loading="lazy"
						className="w-[500px] object-cover"
					/>
					<div className="space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							Kawral, une âme engagée
						</h3>
						<p>
							Depuis ses débuts, GIE Kawral n'a cessé de valoriser
							les richesses naturelles et le savoir-faire
							traditionnel du Sénégal. Au cœur de notre
							développement, notre famille conserve ses valeurs
							fondamentales : l'authenticité des saveurs, la
							transmission du patrimoine culinaire, et l'impact
							positif sur les communautés agricoles locales.
							<br />
							<br />
							Aujourd'hui, GIE Kawral est bien plus qu'une simple
							entreprise de transformation. C'est l'expression
							d'un héritage familial, une vision pour un Sénégal
							qui capitalise sur ses ressources agricoles
							exceptionnelles. Notre ambition est de faire
							découvrir au monde entier la richesse et la
							diversité des produits sénégalais, transformés avec
							soin selon des méthodes alliant tradition et
							exigences modernes.
							<br />
							<br />
							Dans les années à venir, notre famille continuera
							d'innover et de relever de nouveaux défis, en
							préservant toujours l'essence de notre mission :
							valoriser notre terroir et offrir des produits
							d'exception qui racontent l'histoire de notre pays
							et de ses agriculteurs. Chaque bouteille de jus,
							chaque sachet de céréales et chaque pot de confiture
							raconte une histoire - celle de notre famille et du
							Sénégal que nous aimons.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
