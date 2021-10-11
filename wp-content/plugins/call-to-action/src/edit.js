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
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { Button, PanelBody, PanelRow, TextControl, ToggleControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const blockProps = useBlockProps({
		className: `wp-block-instance-call-to-action container`,
	});

	const changeContent = content => {
		props.setAttributes({ content: content });
	};
	
	const changeButtonText = buttonText => {
		props.setAttributes({ title: buttonText });
	}

	const changeButtonUrl = buttonUrl => {
		props.setAttributes({ url: buttonUrl });
	}

	const toggleTarget = target => {
		console.log(target)
		props.setAttributes({ target: target })
	}

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<TextControl
							label="Button text"
							value={props.attributes.title}
							onChange={changeButtonText}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Button URL"
							value={props.attributes.url}
							onChange={changeButtonUrl}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Open link in new tab: "
							checked={props.attributes.target}
							onChange={toggleTarget}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>


			<div className="row w-100">
				<div className="col-sm-8 text-column">
					<RichText
						tagName="h2"
						value={props.attributes.content}
						onChange={changeContent}
						className="cta-text"
						placeholder="Enter your text here..."
					/>
				</div>
				<div className="col-sm-4 align-self-center">
					<Button 
						className="cta-button"
						href={props.attributes.url}
						target={props.attributes.target ? "_blank" : "_self"}
						text={props.attributes.title}
					/>
				</div>
			</div>
		</div>
	);
}
