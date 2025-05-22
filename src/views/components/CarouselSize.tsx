// import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
	{
		id: 1,
		name: "Fatou D.",
		location: "Dakar",
		testimonial:
			"Les jus naturels de GIE Kawral sont extraordinaires. Le bissap a exactement le goût de mon enfance, sans additifs ni sucre artificiel. Impossible de revenir aux jus industriels après avoir goûté l'authenticité de leurs produits. Ma commande mensuelle est devenue un rituel familial incontournable.",
		date: "2025-05-15",
		rating: 5,
		imagePath: "/images/testimonials/fatou.jpg",
	},
	{
		id: 2,
		name: "Dr. Amadou N.",
		location: "Thiès",
		testimonial:
			"Depuis que j'ai découvert les farines de mil enrichies de GIE Kawral, mes petits-déjeuners ont changé du tout au tout. Qualité nutritionnelle exceptionnelle et saveur incomparable. En tant que nutritionniste, je recommande leurs produits à tous mes patients cherchant à revenir aux sources.",
		date: "2025-05-10",
		rating: 5,
		imagePath: "/images/testimonials/amadou.jpg",
	},
	{
		id: 3,
		name: "Mariama S.",
		location: "Marseille",
		testimonial:
			"Vivant à Marseille, je pensais devoir me passer des vraies saveurs du Sénégal. GIE Kawral a changé ça! Leur service de livraison international est impeccable et les confitures arrivent parfaitement conservées. La confiture de mangue me reconnecte instantanément avec mon pays natal.",
		date: "2025-05-18",
		rating: 4,
		imagePath: "/images/testimonials/mariama.jpg",
	},
	{
		id: 4,
		name: "Chef Omar L.",
		location: "Saint-Louis",
		testimonial:
			"En tant que chef, la qualité des ingrédients est ma priorité absolue. Les produits GIE Kawral apportent cette touche d'authenticité qui fait la différence dans mes créations. Mes clients adorent l'histoire derrière chaque produit que je leur raconte en servant.",
		date: "2025-05-20",
		rating: 5,
		imagePath: "/images/testimonials/omar.jpg",
	},
];
export function CarouselSize({ imgSrc }: { readonly imgSrc: string }) {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full mx-20"
		>
			<CarouselContent>
				{Array.from({ length: testimonials.length }).map((_, index) => (
					<CarouselItem
						key={index}
						className="md:basis-1/2 lg:basis-1/3"
					>
						<div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
							<figure className="max-w-screen-md mx-auto">
								<svg
									className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
									viewBox="0 0 24 27"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
										fill="currentColor"
									/>
								</svg>
								<blockquote>
									<p className="text-2xl font-medium text-gray-900">
										{testimonials[index].testimonial}
									</p>
								</blockquote>
								<figcaption className="flex items-center justify-center mt-6 space-x-3">
									<img
										className="w-6 h-6 rounded-full object-cover"
										src={imgSrc}
										alt={imgSrc}
									/>
									<div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
										<div className="pr-3 font-medium text-gray-900">
											{testimonials[index].name}
										</div>
										<div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
											{testimonials[index].location}
										</div>
									</div>
								</figcaption>
							</figure>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
