import Compliance from '../components/Compliance.jsx'
import ComplaintForm from '../components/ComplaintForm.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function CompliancePage() {
    return (
        <div>
            <PageHeader
                title="Compliance"
                subtitle="Explore our standards for security, data privacy, and ethical conduct in all our software projects."
            />
            <div className="pb-20">
                <Compliance />
                <div className="border-t border-neutral-100 max-w-7xl mx-auto mt-10" />
                <ComplaintForm />
            </div>
        </div>
    )
}
