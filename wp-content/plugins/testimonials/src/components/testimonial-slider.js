import Testimonial from "./testimonial";

export default function TestimonialSlider(props) {
	console.log(props.testimonials);

	return (
		<>
			{props.testimonials.map((testimonial) => {
				return (
					<>
						<Testimonial
                            image={testimonial.image}
							description={testimonial.description}
							name={testimonial.name}
							function={testimonial.companyFunction}
							company={testimonial.companyName}
						/>
					</>
				);
			})}

			{/* Component to fetch all testimonials, put them into the slider */}
		</>
	);
}
