import { Button } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

export default function ImageUpload(props) {
    const ALLOWED_MEDIA_TYPES = ["image"];
    
	return (
		<>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={media => props.changeProp({"type": "addImage", "value": media})}
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
													className="testimonial-image"
												/>
											</div>
											<div className="col-sm-12">
												<Button className="bg-warning" onClick={open}>
													Change image
												</Button>
												<Button className="bg-danger" onClick={() => props.changeProp({"type": "removeImage"})}>
													Remove image
												</Button>
											</div>
										</div>
									</div>
								) : (
                                    <div className="col-sm-12">
                                    <Button className="bg-success" onClick={open}>Upload profile image</Button>
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
