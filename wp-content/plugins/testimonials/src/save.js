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
import { useBlockProps } from "@wordpress/block-editor";

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
		className: "wp-block-instance-testimonials container",
	});

	return (
		<div {...blockProps}>
			{props.attributes.testimonials.map((testimonial) => {
				return (
					<div class="row testimonial-row">
						<div class="testimonial">
							<div class="col-sm-12">
								<div class="row">
									<div class="col-sm-12">
									{testimonial.imageId != 0 ? 
										<img src={testimonial.imageUrl} class="testimonial-image" />
										: <div class="testimonial-image-empty" />
									}
									</div>
								</div>
							</div>
							<p class="testimonial-description">{testimonial.description}</p>
							<p>{testimonial.companyInfo}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
