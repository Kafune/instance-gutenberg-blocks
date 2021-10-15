export default function Testimonial(props) {
    return (
        <>
            Single testimonial
            {/* Component to fetch all testimonials, put them into the slider */}
            <img src={props.image} className="testimonial-image"/>
            <p class="testimonial-description"></p>
            <p class="testimonial-info"></p>
        </>
    )
}