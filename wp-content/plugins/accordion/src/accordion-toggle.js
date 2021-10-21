import React from "react";
import { RichText } from "@wordpress/block-editor";

export default function AccordionToggle(props) {
	// const toggleAccordion = (i) => {
    //     alert("test")
	// 	const activeAccordion = null;

	// 	props.attributes.activeAccordion !== i
	// 		? (activeAccordion = i)
	// 		: (activeAccordion = null);

	// 	props.setAttributes({
	// 		...props.attributes,
	// 		activeAccordion: activeAccordion,
	// 	});
	// };

	return (
		<>
			<div class="accordion-heading" data-index={props.index}>
				<RichText.Content tagName="h4" value={props.accordion.heading} />
				<span class="accordion-icon">
					{props.attributes.activeAccordion === props.index ? "-" : "+"}
				</span>
			</div>
		</>
	);
}
