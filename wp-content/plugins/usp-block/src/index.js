/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('instance/usp-block', {
	attributes: {
		usps: {
			type: 'array',
			default: [
				{
					icon: "test",
					title: "Feature one",
					description: "Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language",
					link: "#"
				},
				{
					icon: "test2",
					title: "Feature two",
					description: "Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language",
					link: "#"
				},
				{
					icon: "test3",
					title: "Feature three",
					description: "Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language",
					link: "#"
				},
				{
					icon: "test3",
					title: "Feature four",
					description: "Separated they live in Bookmarksgrove right at the coast of the famous Semantics, large language",
					link: "#"
				},
			]
		}
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	Save: Save,
});
