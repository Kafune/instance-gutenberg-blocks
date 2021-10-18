import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";

export default function SidePanel(props) {
    const changeName = (name, i) => {
        console.log(name);
        console.log(i);
    }

	return (
		<InspectorControls>
			<PanelBody>
				{props.testimonials.map((testimonial, i) => {
					return (
						<PanelRow>
							<TextControl
								label={"Testimonial name " + i}
								onChange={(name) => changeName(name, i)}
								value={testimonial.name}
							/>
						</PanelRow>
					);
				})}
			</PanelBody>
		</InspectorControls>
	);
}
