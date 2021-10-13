/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("instance/headline", {
	attributes: {
		heading: {
			type: "string",
			selector: "h1",
			default: "Long headline to turn your visitors into users",
		},
		subHeading: {
			type: "string",
			selector: "p",
			default:
				"Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language ocean and many more stuff and more more more",
		},
		buttons: {
			type: "array",
			default: [
				{
					type: "Primary",
					url: "#",
					buttonText: "Action",
					alignment: "left",
					target: false,
				},
				{
					type: "Secondary",
					url: "#",
					buttonText: "Action",
					alignment: "right",
					target: false,
				},
			],
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: Save,
});
