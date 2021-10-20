import { Button } from "@wordpress/components";
import Accordion from "./accordion";
import AccordionToolbar from "./accordion-toolbar";

export default function Accordions(props) {
	const accordions = [...props.accordions];

	const updateProperties = (properties) => {
		props.setAttributes({
			...props.attributes,
			accordions: properties,
		});
	};

	const changeProp = ({ property }, i) => {
		const accordion = { ...accordions[i] };

		accordion[property.type] = property.value;

		accordions[i] = accordion;

		updateProperties(accordions);
	};

	const addAccordion = () => {
		const defaultAccordion = {
			heading: "Title that can be expanded",
			description:
				"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
		};

		accordions.push(defaultAccordion);

		updateProperties(accordions);
	};

	return (
		<>
			{props.accordions.map((accordion, i) => {
				return (
					<>
						<Accordion
							heading={accordion.heading}
							description={accordion.description}
							changeProp={(property) => changeProp({ property }, i)}
						/>
					</>
				);
			})}
			<div class="add-accordion-button">
				<Button onClick={addAccordion} className="bg-success">
					Add Accordion
				</Button>
			</div>
		</>
	);
}
