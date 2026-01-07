import Careers from '../components/Careers.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function CareersPage() {
    return (
        <div>
            <PageHeader
                title="Careers"
                subtitle="Join our global team of innovators and help us build the next generation of digital products."
            />
            <div className="pb-20">
                <Careers />
            </div>
        </div>
    )
}
