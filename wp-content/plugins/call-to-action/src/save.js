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
		className: "wp-block-instance-call-to-action container",
	});

	return (
		<div {...blockProps}>
			<div className="row">
				<div className="col-sm-6 text-column">
					<RichText.Content tagName="h2" value={props.attributes.content} className={`text-${props.attributes.textAlign} cta-text`} />
				</div>
				<div className="col-sm-6 align-self-center">
					<a href={props.attributes.url} className="cta-button">{props.attributes.title}</a>
				</div>
			</div>
		</div>
	);
}
