

import Accordion from "./../src/components/accordion";
import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe("Accordion text editing", () => {
	const testAccordion = {
		heading: "Title that can be expanded",
		description:
			"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
	};

	beforeEach(() => {});

	test("Return default text value", () => {
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
		expect(toJson(wrapper)).toMatchSnapshot();

	});
});
