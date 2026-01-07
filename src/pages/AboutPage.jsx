import About from '../components/About.jsx'
import TechStack from '../components/TechStack.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                title="About Us"
                subtitle="We are a group of passionate developers, designers, and strategists dedicated to delivering elite software solutions."
            />
            <About />
            <TechStack />
        </div>
    )
}
