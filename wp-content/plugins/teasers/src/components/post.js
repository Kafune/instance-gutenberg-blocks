import { Button } from "@wordpress/components";

export default function Post(props) {
	return (
        <div class="col post">
            <h3>{props.title}</h3>
            <div>{props.excerpt}</div>
            <Button className="bg-success" href={props.link}>
                Link to post
            </Button>
        </div>
    )
}