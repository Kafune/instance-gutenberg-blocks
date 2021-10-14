/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import {
	PanelBody,
	PanelRow,
	RangeControl,
	TextControl,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

import React, { useState } from "react";

export default function Edit(props) {
	const blockProps = useBlockProps({
		className: "wp-block-usp-block container",
	});

	//there might be a more efficient way to handle fetching a button just to adjust a property from the attributes.
	const usps = [...props.attributes.usps];

	const updateProperties = (properties) => {
		props.setAttributes({
			...props.attributes,
			usps: properties,
		});
	};

	const changeUSPTitle = (title, i) => {
		const usp = { ...usps[i] };

		usp.title = title;
		usps[i] = usp;

		updateProperties(usps);
	};

	const changeUSPDescription = (description, i) => {
		const usp = { ...usps[i] };

		usp.description = description;
		usps[i] = usp;

		updateProperties(usps);
	};

	const filterUSP = amount => usps.filter(usp => usp.number <= amount)


	const adjustUSPAmount = (amount, i) => {
		const filteredUSP = filterUSP(amount);

		if(usps.length < amount) {
			const defaultUSP = {
				number: amount,
				icon: "test",
				title: "Feature",
				description: "Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language",
				link: "#"
			}

			filteredUSP.push(defaultUSP)		
		}

		props.setAttributes({
			...props.attributes,
			usps: filteredUSP
		})
	}

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<TextControl
							label="Primary button text"
							value={"test"}
							onChange={message => console.log(message)}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label="Amount of USPS"
							onChange={val => adjustUSPAmount(val)}
							min="1"
							max="4"
							value={props.attributes.usps.length}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div class="row">
				{props.attributes.usps.map((usp, i) => {
					return (
						<div class="col">
							<RichText
								tagName="h3"
								value={props.attributes.usps[i].title}
								onChange={title => changeUSPTitle(title, i)}
								placeholder="Enter your title..."
							/>
							<RichText
								tagName="p"
								value={props.attributes.usps[i].description}
								onChange={description => changeUSPDescription(description, i)}
								placeholder="Enter your description..."
							/>
							<a href={usp.link}>Read more {">"}</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
