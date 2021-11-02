import { Button } from "@wordpress/components";

export default function Post(props) {
	return (
        <div class="col-sm-3 post">
            <h3>{props.title}</h3>
            <div>{props.excerpt}</div>
            <Button className="post-button" href={props.link}>
                Link to post
            </Button>
        </div>
    )
}