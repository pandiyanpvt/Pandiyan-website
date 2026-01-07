import Testimonials from '../components/Testimonials.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function TestimonialsPage() {
    return (
        <div>
            <PageHeader
                title="Client Reviews"
                subtitle="Hear directly from the businesses and innovators we've partnered with to create world-class software."
            />
            <Testimonials />
        </div>
    )
}
