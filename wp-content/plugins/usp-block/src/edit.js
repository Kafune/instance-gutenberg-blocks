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
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

import React, {useState} from 'react';

export default function Edit(props) {
	// const [] = useState();

	const blockProps = useBlockProps({
		className: "wp-block-usp-block container",
	});

	const showPanelOptions = i => {
		// const reduce = props.attributes.usps.reduce((prev, current) => prev + " " + current);
		const reduce = props.attributes.usps.reduce((acc, usp) => {
			return acc + usp.number
		}, 0)
		console.log(reduce);
		return reduce;
	}

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					{}
					<PanelRow>
						<TextControl
							label="Primary button text"
							value={"test"}
							onChange={(message) => console.log(message)}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div class="row">
				{props.attributes.usps.map((usp, i) => {
					return <div class="col" onClick={() => showPanelOptions(i)}>
						<h3>{usp.title}</h3>
						<p class="usp-text">{usp.description}</p>
						<a href={usp.link}>Read more ></a> {/* Error message on right arrow, should be part of the HTML. */}
					</div>;
				})}
			</div>
		</div>
	);
}
