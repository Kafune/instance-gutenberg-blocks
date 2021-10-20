<?php
/**
 * Plugin Name:       Accordion
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       accordion
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
function instance_accordion_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'instance_accordion_block_init' );


function my_enqueue_plugin_js() {
	wp_enqueue_script(
		'my-theme-frontend',
		plugin_dir_path(__FILE__) . '/src/save.js',
		['wp-element'],
		time(), // Change this to null for production
		true
	  );
}

add_action( 'wp_enqueue_scripts', 'my_enqueue_plugin_js' ); // Loads on frontend

