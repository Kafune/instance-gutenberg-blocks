function toggleAccordion(i) {
	let allAccordions = document.querySelectorAll(".accordion-heading");
	allAccordions.forEach(accordion => {
		let parentNode = accordion.parentNode;
		let accordionHeading = parentNode.childNodes[0];
		let accordionDescription = parentNode.childNodes[1];
		if(accordion.dataset.accordionIndex == i) {
			if(accordionDescription.classList.contains("accordion-open")) {
				closeAccordion(accordionHeading, accordionDescription)
			} else {
				openAccordion(accordionHeading, accordionDescription)
			}			
		} else {
			closeAccordion(accordionHeading, accordionDescription)
		}
	})
}

function openAccordion(heading, description) {
	heading.childNodes[1].innerHTML = "-";
	description.classList.add("accordion-open");
	description.classList.remove("accordion-closed");
}

function closeAccordion(heading, description) {
	heading.childNodes[1].innerHTML = "+";
	description.classList.remove("accordion-open");
	description.classList.add("accordion-closed");
}