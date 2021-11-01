/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

import { fetchData } from './components/fetch-requests';

import {useState, useEffect} from 'react';
import Posts from './components/posts';

export default function Edit(props) {
	const blockProps = useBlockProps({
		className: "wp-block-instance-teasers container",
	});
	
	useEffect(() => {
		fetchData("wp/v2/posts", "GET")
		.then(posts => {
			props.setAttributes({
				...props.attributes,
				posts: posts
			})
		})
	}, [])


	return (
		<div {...blockProps}>
			<Posts
				posts={props.attributes.posts}
			/>
		</div>
	);
}
