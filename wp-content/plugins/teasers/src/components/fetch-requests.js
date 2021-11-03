import apiFetch from '@wordpress/api-fetch';

export async function fetchData(path="wp/v2/posts", method="GET") {
    return apiFetch({
		path: path,
        method: method
    })
}
