import Services from '../components/Services.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function ServicesPage() {
    return (
        <div>
            <PageHeader
                title="Our Services"
                subtitle="From custom software to cloud architecture, we build high-impact digital products tailored to your needs."
            />
            <Services />
        </div>
    )
}
