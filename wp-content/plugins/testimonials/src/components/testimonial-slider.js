import { Button } from "@wordpress/components";
import Testimonial from "./testimonial";

export default function TestimonialSlider(props) {
	const testimonials = [...props.testimonials];

	const updateProperties = (properties) => {
		props.setAttributes({
			...props.attributes,
			testimonials: properties,
		});
	};

	const changeProp = ({ property }, i) => {
		const testimonial = { ...testimonials[i] };
		if (property.type === "addImage") {
			testimonial["imageId"] = property.value.id;
			testimonial["imageUrl"] = property.value.url;
		} else if (property.type === "removeImage") {
			testimonial["imageId"] = 0;
			testimonial["imageUrl"] = "";
		} else {
			testimonial[property.type] = property.value;
		}

		testimonial[property.type] = property.value;
		testimonials[i] = testimonial;

		updateProperties(testimonials);
	};

	const addTestimonial = () => {
		const defaultTestimonial = {
			imageId: 0,
			imageUrl: "",
			description: "All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols",
			companyInfo: "Name Surname, CNN, Lead marketing specialist",
		};

		testimonials.push(defaultTestimonial);

		props.setAttributes({
			...props.attributes,
			testimonials: testimonials,
		});
	}

	return (
		<>
			{props.testimonials.map((testimonial, i) => {
				return (
					<div class="row testimonial-row">
						<Testimonial
							imageUrl={testimonial.imageUrl}
							imageId={testimonial.imageId}
							description={testimonial.description}
							name={testimonial.name}
							companyInfo={testimonial.companyInfo}
							changeProp={(property) => changeProp({ property }, i)}
						/>
					</div>
				);
			})}
			<Button onClick={addTestimonial} className="bg-success">Add Testimonial</Button>
		</>
	);
}
