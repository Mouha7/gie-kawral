import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxCustom } from "./CheckboxCustom";

export function AccordionCustom() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1" className="border-kawral-red">
				<AccordionTrigger>Confitures</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-2 pl-2">
					<CheckboxCustom text="Papaye" />
					<CheckboxCustom text="Mangue" />
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-2" className="border-kawral-red">
				<AccordionTrigger>Céréales (400 G)</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-2 pl-2">
					<CheckboxCustom text="Araw" />
					<CheckboxCustom text="Sankhal" />
					<CheckboxCustom text="Thiakri" />
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-3" className="border-kawral-red">
				<AccordionTrigger>Jus</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-2 pl-2">
					<CheckboxCustom text="Bissap Rouge" />
					<CheckboxCustom text="Bissap Blanc" />
					<CheckboxCustom text="Bouye" />
					<CheckboxCustom text="Carotte" />
					<CheckboxCustom text="Clémentine" />
					<CheckboxCustom text="Gingembre" />
					<CheckboxCustom text="Moringa" />
					<CheckboxCustom text="Melon" />
					<CheckboxCustom text="Tamarin" />
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
