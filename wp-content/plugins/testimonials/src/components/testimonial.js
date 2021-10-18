import { RichText } from "@wordpress/block-editor";

export default function Testimonial(props) {
	// const updateProperties = (properties) => {
	// 	props.setAttributes({
	// 		...props.attributes,
	// 		testimonials: properties,
	// 	});
	// };

	const changeDescription = (description, i) => {
		// const testimonial = { ...testimonials[i] };

		// testimonial.description = description;
		// testimonials[i] = testimonial;

		// updateProperties(testimonials);
	};

	{/* Component to fetch all testimonials, put them into the slider */}
	return (
		<div class="testimonial">
			<img
				src={props.image}
				className="testimonial-image"
			/>
			<RichText
				tagName="p"
				value={props.description}
				onChange={(description, i) => changeDescription(description, i)}
				placeholder="Enter your description..."
			/>
			<p class="testimonial-info">
				{props.name}
				{props.companyFunction}
				{props.companyName}
			</p>
		</div>
	);
}
