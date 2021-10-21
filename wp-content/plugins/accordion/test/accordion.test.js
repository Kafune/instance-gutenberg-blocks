import Accordion from "./../src/components/accordion";
import React from "react";
import { render, screen } from '@testing-library/react';

describe("Accordion text editing", () => {
	const testAccordion = {
		heading: "Title that can be expanded",
		description:
			"By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.",
	};

	beforeEach(() => {});

	test("Return default text value", () => {
		// const wrapper = render(
		// 	<Accordion
		// 		heading={testAccordion.heading}
		// 		description={testAccordion.description}
		// 		changeProp={(property) => changeProp({ property }, i)}
		// 	/>
		// );

		// expect(wrapper.heading).toBe("Title that can be expanded");
        await insertBlock( 'Wrapper Block' );

        // Check if block was inserted
        expect( await page.$( '[data-type="e2e-tests-example/wrapper-block"]' ) ).not.toBeNull();
    
        expect( await getEditedPostContent() ).toMatchSnapshot();
	});
});
