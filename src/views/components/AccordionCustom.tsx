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
			<AccordionItem value="item-1" className="border-bio-contraste">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-2" className="border-bio-contraste">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that matches the other
					components&apos; aesthetic.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-3" className="border-bio-contraste">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					<CheckboxCustom />
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
