import Branches from '../components/Branches.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function BranchesPage() {
    return (
        <div>
            <PageHeader
                title="Our Branches"
                subtitle="We operate globally to provide consistent support and expertise wherever your business takes you."
            />
            <Branches />
        </div>
    )
}
