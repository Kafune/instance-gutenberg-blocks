import { Button } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

export default function ImageUpload(props) {
    const ALLOWED_MEDIA_TYPES = ["image"];

    const updateProperties = (properties) => {
		props.setAttributes({
			...props.attributes,
			usps: properties,
		});
	};

    const onSelectImage = (media) => {
    // props.setAttributes({
    //     mediaId: Number(media.id),
    //     mediaUrl: String(media.url),
    // });
    }

const removeImage = () => {
    // props.setAttributes({
    //     mediaId: 0,
    //     mediaUrl: "",
    // });
};


	return (
		<>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectImage}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					autoOpen={true}
					render={({ open }) => {
						return (
							<>
								{props.imageId != 0 ? (
									<div className="col-sm-12">
										<div className="row">
											<div className="col-sm-12">
												<img
													src={props.imageUrl}
													className="img-fluid"
												/>
											</div>
											<div className="col-sm-12">
												<Button className="bg-warning" onClick={open}>
													Change image
												</Button>
												<Button className="bg-danger" onClick={removeImage}>
													Remove image
												</Button>
											</div>
										</div>
									</div>
								) : (
                                    <div className="col-sm-12">
                                    <Button className="bg-success" onClick={open}>Open Media Library</Button>
                                </div>
								)}
							</>
						);
					}}
				/>
			</MediaUploadCheck>
		</>
	);
}
