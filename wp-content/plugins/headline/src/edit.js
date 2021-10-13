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
	Button,
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl,
} from "@wordpress/components";

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
		className: `wp-block-instance-headline container`,
	});

	const changeHeading = heading => {
		props.setAttributes({ heading: heading });
	};

	const changeSubHeading = subHeading => {
		props.setAttributes({ subHeading: subHeading });
	};

	//functions to deep copy attributes for modification
	const fetchButton = (buttons, index) => {
		return buttons[index];
	}

	const updateProperties = properties => {
		props.setAttributes({
			...props.attributes,
			buttons: properties,
		});
	}

	//there might be a more efficient way to handle fetching a button just to adjust a property from the attributes.
	const changeButtonText = (buttonText, i) => {
		const buttons = [...props.attributes.buttons];
		const button = fetchButton(buttons, i);

		const buttonProps = { ...button };
		buttonProps.buttonText = buttonText;
		buttons[i] = buttonProps;

		updateProperties(buttons);
	};

	const changeButtonUrl = (url, i) => {
		const buttons = [...props.attributes.buttons];
		const button = { ...buttons[i] };
		button.url = url;
		buttons[i] = button;

		props.setAttributes({
			...props.attributes,
			buttons: buttons,
		});
	};

	const toggleButtonTarget = (target, i) => {
		console.log(target)
	}

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<TextControl
							label="Primary button text"
							value={props.attributes.buttons[0].buttonText}
							onChange={message => changeButtonText(message, 0)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Primary button URL"
							value={props.attributes.buttons[0].url}
							onChange={url => changeButtonUrl(url, 0)}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Open link in new tab: "
							checked={props.attributes.target}
							onChange={target => toggleButtonTarget(target, 0)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Secondary button text"
							value={props.attributes.buttons[1].buttonText}
							onChange={message => changeButtonText(message, 1)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Secondary button URL"
							value={props.attributes.buttons[1].url}
							onChange={url => changeButtonUrl(url, 1)}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Open link in new tab: "
							checked={props.attributes.target}
							onChange={target => toggleButtonTarget(target, 1)}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div class="text-center">
				<RichText
					tagName="h1"
					value={props.attributes.heading}
					onChange={changeHeading}
					className="headline-text"
					placeholder="Enter your title..."
				/>
				<RichText
					tagName="p"
					value={props.attributes.subHeading}
					onChange={changeSubHeading}
					className="headline-text"
					placeholder="Enter your text..."
				/>
				<div class="row btn-row">
					<div class="col text-right btn-col">
						<Button
							className="headline-button headline-btn-primary"
							href={props.attributes.buttons[0].url}
							target={props.attributes.buttons[0].target ? "_blank" : "_self"}
							text={props.attributes.buttons[0].buttonText}
						/>
					</div>
					<div class="col text-left btn-col">
						<Button
							className="headline-button headline-btn-secondary"
							href={props.attributes.buttons[1].url}
							target={props.attributes.buttons[1].target ? "_blank" : "_self"}
							text={props.attributes.buttons[1].buttonText}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
