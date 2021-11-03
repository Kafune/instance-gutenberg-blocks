<?php
/**
 * Plugin Name:       Teasers
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       teasers
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function instance_teasers_block_init() {
	register_block_type( __DIR__, [
		'render_callback' => 'instance_teasers_render',
		'attributes' => [
			'posts' => [
				'type' => 'array'
			],
			'postAmount' => [
				'type' => 'number',
				'default' => 4
			],
		]
	] );
}

add_action( 'init', 'instance_teasers_block_init' );

function instance_teasers_render($attribute, $content) {
	$posts = '<div class="wp-block-instance-teasers container">';
	$posts .= '<h1>Latest Posts</h1>';
	$posts .= '<div class="row post-row">';
	if(!empty($attribute['posts'])) {
		$fetched_posts = get_posts(array(
			'numberposts' => $attribute['postAmount']
		));
		foreach($fetched_posts as $post) {
			$posts .= '<div class="col-sm-3 post">';
			$posts .= '<h3>'.$post->post_title.'</h3>';
			$posts .= '<p>'.(!empty($post->post_excerpt) ? $post->post_excerpt : "There is no excerpt for this post").'</p>';
			$posts .= '<a class="post-button" href='.get_permalink($post->ID).'>Link to post</a>';
			$posts .= '</div>';
		};
	}
	$posts .= '</div>';
	$posts .= '</div>';
	return $posts;
}

// wp_enqueue_script( 'wp-api' );