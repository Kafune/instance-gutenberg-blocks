import { RichText } from "@wordpress/block-editor";

import ImageUpload from "./image-upload";

export default function Testimonial(props) {
	return (
		<div class="testimonial">
			<ImageUpload
				imageId={props.imageId}
				imageUrl={props.imageUrl}
				changeProp={props.changeProp}
			/>
			<RichText
				tagName="p"
				value={props.description}
				onChange={description => props.changeProp({"type": "description","value": description})}
				className="testimonial-description"
				placeholder="Enter your description..."
			/>
			<RichText
				tagName="p"
				value={props.companyInfo}
				onChange={companyInfo => props.changeProp({"type": "companyInfo", "value": companyInfo})}
			/>
		</div>
	);
}
