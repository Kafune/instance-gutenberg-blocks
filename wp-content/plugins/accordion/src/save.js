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
import Accordions from "./components/accordions";

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
		className: "wp-block-instance-accordion container",
	});

	const setActiveAccordion = () =>
		props.attributes.activeAccordion !== i ? setActive(i) : setActive(undefined);

	return (
		<div {...blockProps}>
			{props.attributes.accordions.map((accordion) => {
				return (
					<div class="accordion">
						<div class="accordion-heading">
							<RichText.Content tagName="h4" value={accordion.heading} />
							<span class="accordion-icon">-</span>
						</div>
						<div
							class={`accordion-description accordion-${
								props.active ? "open" : "closed"
							}`}
						>
							<RichText.Content tagName="p" value={accordion.description} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
