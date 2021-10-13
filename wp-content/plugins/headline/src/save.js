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
import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const blockProps = useBlockProps.save({
		className: "wp-block-instance-headline container",
	});

	return (
		<div {...blockProps}>
			{console.log(props.attributes)}
			<div class="text-center">
				<RichText.Content tagName="h1" value={props.attributes.heading} />
				<RichText.Content tagName="p" value={props.attributes.subHeading} />
				<div class="row btn-row">
					<div class="col text-right btn-col">
						<a
							href={props.attributes.buttons[0].url}
							target="_self"
							class="components-button headline-button headline-btn-primary"
							rel="noopener"
						>
							{props.attributes.buttons[0].buttonText}
						</a>
					</div>
					<div class="col text-left btn-col">
						<a
							href={props.attributes.buttons[1].url}
							target="_self"
							class="components-button headline-button headline-btn-secondary"
							rel="noopener"
						>
							{props.attributes.buttons[1].buttonText}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
