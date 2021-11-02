function toggleAccordion(i) {
	let accordion = document.querySelector("[data-accordion-index='"+i+"']");
	let childNodes = accordion.parentNode.childNodes;
	// console.log(childNodes[1]);

	childNodes[1].classList.add("accordion-open");

	console.log(accordion)



}

// export default function AccordionToggle(props) {
// 	const toggleAccordion = (i) => {
//         alert("test")
// 		const activeAccordion = null;

// 		props.attributes.activeAccordion !== i
// 			? (activeAccordion = i)
// 			: (activeAccordion = null);

// 		props.setAttributes({
// 			...props.attributes,
// 			activeAccordion: activeAccordion,
// 		});
// 	};

// 	return (
// 		<>
// 			<div class="accordion-heading" onClick={() => toggleAccordion(props.index)}>
// 				<RichText.Content tagName="h4" value={props.accordion.heading} />
// 				<span class="accordion-icon">
// 					{props.attributes.activeAccordion === props.index ? "-" : "+"}
// 				</span>
// 			</div>
// 		</>
// 	);
// }
