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
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	InnerBlocks,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

//more imports
import React, { useEffect } from "react";

export default function Edit(props) {
	const ALLOWED_MEDIA_TYPES = ["image"];

	const { attributes, setAttributes } = props;

	const onSelectMedia = (media) =>
		props.setAttributes({
			mediaId: Number(media.id),
			mediaUrl: String(media.url),
		});

	const onChangeParagraphContent = (newParagraphContent) =>
		props.setAttributes({ pContent: newParagraphContent });

	const onChangeHeadingContent = (newHeadingContent) =>
		props.setAttributes({ headingContent: newHeadingContent });

	const onChangeAlignment = (newAlignment) =>
		props.setAttributes({ alignment: newAlignment });

	return (
		<div
			{...useBlockProps({
				className: "wp-block-instance-text-image",
			})}
		>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectMedia}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					render={({ open }) => {
						return (
							<div>
								{props.attributes.mediaId != 0 ? (
									<img src={props.attributes.mediaUrl} />
								) : (
									<Button className="text-image-img-btn" onClick={open}>
										Open Media Library
									</Button>
								)}
							</div>
						);
					}}
				/>
			</MediaUploadCheck>
			<div>
				<InnerBlocks />
			</div>
		</div>
	);
}
