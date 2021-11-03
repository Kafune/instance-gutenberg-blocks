import { Button } from "@wordpress/components";

export default function Post(props) {
    const createMarkup = () => {
        return {__html: props.excerpt}
    }

	return (
        <div class="col-sm-3 post">
            <h3>{props.title}</h3>
            <div dangerouslySetInnerHTML={createMarkup()}/>
            <Button className="post-button" href={props.link}>
                Link to post
            </Button>
        </div>
    )
}