

import Accordion from "./../src/components/accordion";
import Accordions from "./../src/components/accordions";
import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


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

	beforeEach(() => {});

	test("Snapshot test", () => {
		const wrapper = shallow(
			<Accordion
				heading={testAccordion.heading}
				description={testAccordion.description}
				changeProp={(property) => changeProp({ property }, i)}
			/>
		);

		// const accordion = jest.mock('./../src/components/accordion',() => 'Accordion')

		// expect(wrapper.find(Accordion).prop('heading')).toBe("Title that can be expanded");
		// const container = wrapper.find(Accordion).length
		// console.log(toJson(wrapper).find(Accordion).length)
		console.log(wrapper.find('heading'))

	});

	test("Mocking Accordion", () => {
		jest.mock('./../src/components/accordions', () => 'Accordions')
		// jest.doMock('./../src/components/accordion', () => {
		// 	const component = () => <div/>
		// 	return component;
		// })

		// const test = require('./../src/components/accordions').default;
		console.log(jest.mock('./../src/components/accordions', () => 'Accordions')
		)
	})
});
