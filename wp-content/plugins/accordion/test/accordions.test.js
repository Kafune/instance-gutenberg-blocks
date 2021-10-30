

import Accordion from "./../src/components/accordion";
import Accordions from "./../src/components/accordions";
import React from "react";
import renderer from "react-test-renderer";


describe("Accordions functions", () => {
	const accordions = [
		{
			heading: "Title that can be expanded",
			description:
				"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
		},
		{
			heading:
				"This is an example title that has enough text to spread over two lines ",
			description:
				"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
		},
		{
			heading: "Another title that can be expanded",
			description:
				"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
		},
		{
			heading: "This is an item that has been expanded",
			description:
				"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
		},
	]

	const testAccordion = {
		heading: "Title that can be expanded",
		description:
			"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
	};

	beforeEach(() => { });

	test("Shallow render single accordion", () => {
		const wrapper = renderer.create(
			<Accordion
				heading={testAccordion.heading}
				description={testAccordion.description}
				changeProp={(property) => changeProp({ property }, i)}
			/>
		);

		let tree = wrapper.toJSON();
		expect(tree).toMatchSnapshot();

		// expect(tree.props.description).toBe("Title that can be expanded");
		console.log(tree.props)

		tree = wrapper.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test("Test multiple accordions", () => {
		// let attributes = {
		// 	accordions: {
		// 		type: "array",
		// 		default: [
		// 			{
		// 				heading: "Title that can be expanded",
		// 				description:
		// 					"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
		// 			},
		// 			{
		// 				heading:
		// 					"This is an example title that has enough text to spread over two lines ",
		// 				description:
		// 					"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
		// 			},
		// 			{
		// 				heading: "Another title that can be expanded",
		// 				description:
		// 					"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
		// 			},
		// 			{
		// 				heading: "This is an item that has been expanded",
		// 				description:
		// 					"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
		// 			},
		// 		],
		// 	},
		// 	activeAccordion: {
		// 		type: "number",
		// 		default: 2
		// 	}
		// }

		// const setAttributes = () => { }

		// const testProperties = {
		// 	...attributes,
		// 	accordions: accordions
		// }
		// Accordions.updateProperties(testProperties)
		// expect(Accordions.updateProperties).toBeCalled();


		

	})
});
