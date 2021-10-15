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
registerBlockType("instance/usp-block", {
	attributes: {
		usps: {
			type: "array",
			default: [
				{
					number: 1,
					iconId: 0,
					iconUrl: "",
					title: "Feature",
					description:
						"Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language",
					url: "#",
				},
				{
					number: 2,
					iconId: 0,
					iconUrl: "",
					title: "Feature",
					description:
						"Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language",
					url: "#",
				},
				{
					number: 3,
					iconId: 0,
					iconUrl: "",
					title: "Feature",
					description:
						"Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language",
					url: "#",
				},
				{
					number: 4,
					iconId: 0,
					iconUrl: "",
					title: "Feature",
					description:
						"Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language",
					url: "#",
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
