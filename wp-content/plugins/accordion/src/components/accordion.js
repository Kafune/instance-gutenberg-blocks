import React from 'react';
import ReactDOM from 'react-dom';
import { RichText } from "@wordpress/block-editor";

export default function Accordion(props) {
	return (
		<div class="accordion">
			<div class="accordion-heading">
				<RichText
					tagName="h4"
					value={props.heading}
					onChange={(heading) =>
						props.changeProp({ type: "heading", value: heading })
					}
					placeholder="Title..."
				/>
				<span class="accordion-icon">-</span>
			</div>
			<div class="accordion-description accordion-open">
				<RichText
					tagName="p"
					value={props.description}
					onChange={(description) =>
						props.changeProp({ type: "description", value: description })
					}
					placeholder="Enter your description..."
				/>
			</div>
		</div>
	);
}
