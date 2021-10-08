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
import React from "react";

export default function Edit(props) {
	const ALLOWED_MEDIA_TYPES = ["image"];

	const onSelectMedia = (media) =>
		props.setAttributes({
			mediaId: Number(media.id),
			mediaUrl: String(media.url),
		});

	const removeMedia = () => {
		props.setAttributes({
			mediaId: 0,
			mediaUrl: "",
		});
	};

	const blockProps = useBlockProps({
		className: "wp-block-instance-text-image container",
	});

	const allowedBlocks = ["core/heading", "core/paragraph", "core/list", "instance/text"];

	return [
		<div {...blockProps}>
			<div className="row w-100">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectMedia}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						render={({ open }) => {
							return (
								<>
									{props.attributes.mediaId != 0 ? (
										<div className="col-sm-6">
											<div className="row">
												<div className="col-sm-12">
													<img
														src={props.attributes.mediaUrl}
														className="img-fluid"
													/>
												</div>
												<div className="col-sm-12">
													<Button className="bg-warning" onClick={open}>
														Change image
													</Button>
													<Button className="bg-danger" onClick={removeMedia}>
														Remove image
													</Button>
												</div>
											</div>
										</div>
									) : (
										<div className="col-sm-6">
											<Button onClick={open}>Open Media Library</Button>
										</div>
									)}
								</>
							);
						}}
					/>
				</MediaUploadCheck>
				<div className="col-sm-6 text-column">
					<InnerBlocks allowedBlocks={allowedBlocks} />
				</div>
			</div>
		</div>,
	];
}
