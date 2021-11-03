import Post from "./post";

export default function Posts(props) {
	return (
		<div>
			<h1>Latest Posts</h1>
			<div class="row post-row">
				{props.loading ? (
					// Possible to put a loading component here
					<p>Loading...</p>
				) : (
					props.posts.map((post) => {
						return (
							<Post
								title={post.title.rendered}
								excerpt={post.excerpt.rendered ? post.excerpt.rendered : "There is no excerpt for this post"}
								link={post.link}
							/>
						);
					})
				)}
			</div>
		</div>
	);
}
