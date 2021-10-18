import { RichText } from "@wordpress/block-editor";

import ImageUpload from "./image-upload";

export default function Testimonial(props) {
	// setDescription((description) => {
	// 	console.log(description)
	// })

	const changeDescription = (description) => {
		
		const testimonial = { ...testimonials[i] };

		testimonial.description = description;
		testimonials[i] = testimonial;

		updateProperties(testimonials);
	};

	{/* Component to fetch all testimonials, put them into the slider */}
	return (
		<div class="testimonial">
			<ImageUpload
				imageId={props.imageId}
				imageUrl={props.imageUrl}
				class="testimonial-image"
			/>
			<RichText
				tagName="p"
				value={props.description}
				onChange={description => props.changeProp(description)}
				placeholder="Enter your description..."
			/>
			<p class="testimonial-info">
				{props.name + ", "}
				{props.companyFunction + ", "}
				{props.companyName}
			</p>
		</div>
	);
}
