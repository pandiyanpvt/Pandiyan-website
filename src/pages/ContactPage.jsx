import Contact from '../components/Contact.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function ContactPage() {
    return (
        <div>
            <PageHeader
                title="Contact Us"
                subtitle="Ready to start your journey with us? Reach out and let's discuss how we can bring your vision to life."
            />
            <Contact />
        </div>
    )
}
