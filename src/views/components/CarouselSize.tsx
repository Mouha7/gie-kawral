import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize({ imgSrc }: { readonly imgSrc: string }) {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full mx-20"
		>
			<CarouselContent>
				{Array.from({ length: 10 }).map((_, index) => (
					<CarouselItem
						key={index}
						className="md:basis-1/2 lg:basis-1/3"
					>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<img className="w-80 object-cover" src={imgSrc} alt={imgSrc} />
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}