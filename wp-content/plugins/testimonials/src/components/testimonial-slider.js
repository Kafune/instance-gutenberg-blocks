import { Button } from "@wordpress/components";
import Testimonial from "./testimonial";

export default function TestimonialSlider(props) {
	const testimonials = [...props.attributes.testimonials];

	const updateProperties = (properties) => {
		props.setAttributes({
			...props.attributes,
			testimonials: properties,
		});
	};

	const changeProp = (property, index) => {
		console.log(property)
		console.log(index)
	}

	return (
		<div class="row testimonial-row">
			<Button onClick={(currentIndex) => setIndex(currentIndex--)}>
				Previous
			</Button>
			{props.testimonials.map((testimonial, i) => {
				return (
					<>
						<Testimonial
							imageUrl={testimonial.imageUrl}
							imageId={testimonial.imageId}
							description={testimonial.description}
							name={testimonial.name}
							companyFunction={testimonial.companyFunction}
							companyName={testimonial.companyName}
							changeProp={(property) => changeProp(property, i)}
						/>
					</>
				);
			})}
			<Button onClick={(currentIndex) => setIndex(currentIndex++)}>Next</Button>
		</div>
	);
}
