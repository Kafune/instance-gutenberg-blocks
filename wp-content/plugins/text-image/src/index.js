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
registerBlockType("gutenberg-understrap/text-image", {
	attributes: {
		mediaId: {
			type: "number",
			default: 0,
		},
		mediaUrl: {
			type: "string",
			default: "",
		},
		headingContent: {
			type: "string",
			source: "html",
			selector: "h3",
		},
		pContent: {
			type: "string",
			source: "html",
			selector: "p",
		},
		alignment: {
			type: "string",
			default: "none",
		},
	},
	supports: {
		align: ["left", "right", "center"],
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
