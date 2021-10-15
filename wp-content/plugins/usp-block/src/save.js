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
		className: "wp-block-instance-usp-block container",
	});

	return (
		<div {...blockProps}>
			<div className="row">
				{props.attributes.usps.map((usp, i) => {
					return (
						<div class="col">
							<img src={usp.iconUrl} className="usp-icon" />
							<RichText.Content tagName="h3" value={usp.title} />
							<RichText.Content tagName="p" value={usp.description} />
							<a href={usp.url} rel="noopener">
								Read more {">"}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
