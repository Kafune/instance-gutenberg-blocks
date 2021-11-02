function toggleAccordion(i) {
	let element = document.querySelectorAll("[data-index="+i+"]");

	console.log(element);
	console.log(i);
	
	// if(element.dataset.index === i) {
	// 	console.log(element.dataset)
	// } else {
	// 	console.log("test")
	// }


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
