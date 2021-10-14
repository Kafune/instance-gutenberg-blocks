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
	MediaUpload,
	MediaUploadCheck,
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
	RangeControl,
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
		className: "wp-block-usp-block container",
	});

	//there might be a more efficient way to handle fetching a button just to adjust a property from the attributes.
	const usps = [...props.attributes.usps];

	const updateProperties = (properties) => {
		props.setAttributes({
			...props.attributes,
			usps: properties,
		});
	};

	const changeUSPTitle = (title, i) => {
		const usp = { ...usps[i] };

		usp.title = title;
		usps[i] = usp;

		updateProperties(usps);
	};

	const changeUSPDescription = (description, i) => {
		const usp = { ...usps[i] };

		usp.description = description;
		usps[i] = usp;

		updateProperties(usps);
	};

	const filterUSP = (amount) => usps.filter((usp) => usp.number <= amount);

	const adjustUSPAmount = (amount, i) => {
		const filteredUSP = filterUSP(amount);

		if (usps.length < amount) {
			const defaultUSP = {
				number: amount,
				iconId: 0,
				iconUrl: "",
				title: "Feature",
				description:
					"Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language",
				url: "#",
			};

			filteredUSP.push(defaultUSP);
		}

		props.setAttributes({
			...props.attributes,
			usps: filteredUSP,
		});
	};

	//icon upload
	const ALLOWED_MEDIA_TYPES = ["image/svg+xml"];

	const onSelectMedia = (media, i) => {
		const usp = { ...usps[i] };

		usp.iconId = media.id;
		usp.iconUrl = media.url;
		usps[i] = usp;

		updateProperties(usps);
	};

	const removeMedia = (i) => {
		const usp = { ...usps[i] };

		usp.iconId = 0;
		usp.iconUrl = "";
		usps[i] = usp;

		updateProperties(usps);
	};

	//icon upload
	const iconUpload = (usp, i, { open }) => {
		return usp.iconId != 0 ? (
			<div className="col-sm-6">
				<div className="row">
					<div className="col-sm-12">
						<img src={usp.iconUrl} className="usp-icon" />
					</div>
					<div className="col-sm-12">
						<Button className="bg-warning" onClick={open}>
							Change image
						</Button>
						<Button className="bg-danger" onClick={() => removeMedia(i)}>
							Remove image
						</Button>
					</div>
				</div>
			</div>
		) : (
			<div className="col-sm-6">
				<Button onClick={open}>+ SVG Icon</Button>
			</div>
		);
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<RangeControl
							label="Amount of USPS"
							onChange={(val) => adjustUSPAmount(val)}
							min="1"
							max="4"
							value={props.attributes.usps.length}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div class="row">
				{props.attributes.usps.map((usp, i) => {
					return (
						<div class="col">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => onSelectMedia(media, i)}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									render={({ open }) => iconUpload(usp, i, { open })}
								/>
							</MediaUploadCheck>

							<RichText
								tagName="h3"
								value={usp.title}
								onChange={(title) => changeUSPTitle(title, i)}
								placeholder="Enter your title..."
							/>
							<RichText
								tagName="p"
								value={usp.description}
								onChange={(description) => changeUSPDescription(description, i)}
								placeholder="Enter your description..."
							/>
							<a href={usp.url}>Read more {">"}</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
