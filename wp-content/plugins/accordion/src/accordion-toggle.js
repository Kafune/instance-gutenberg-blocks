function toggleAccordion(i) {
	let allAccordions = document.querySelectorAll(".accordion-heading");
	allAccordions.forEach(accordion => {
		let parentNode = accordion.parentNode;
		let accordionHeading = parentNode.childNodes[0];
		let accordionDescription = parentNode.childNodes[1];
		if(accordion.dataset.accordionIndex == i) {
			accordionDescription.classList.add("accordion-open");
			accordionDescription.classList.remove("accordion-closed");
			accordionHeading.childNodes[1].innerHTML = "-";
		} else {
			accordionDescription.classList.add("accordion-closed");
			accordionDescription.classList.remove("accordion-open");
			accordionHeading.childNodes[1].innerHTML = "+";
		}
	})
}
