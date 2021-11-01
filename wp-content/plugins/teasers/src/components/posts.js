import Post from "./post"

export default function Posts(props) {
	return (
        <div>
            <h1>Latest Posts</h1>
            <div class="row">
            {props.posts ? (
            props.posts.map(post => {
                return (
                    <Post
                        title={post.title.rendered}
                        excerpt={post.excerpt.rendered}
                        link={post.link}
                    />
                )
            })
            ) : (
                // Possible to put a loading component here
                <p>Loading...</p>
            )}

            </div>
        </div>
    )
}