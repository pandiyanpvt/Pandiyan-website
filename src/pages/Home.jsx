import Hero from '../components/Hero.jsx'
import ServicesShort from '../components/ServicesShort.jsx'
import FeaturedProjects from '../components/FeaturedProjects.jsx'
import OurClients from '../components/OurClients.jsx'
import FAQ from '../components/FAQ.jsx'
import HomeCTA from '../components/HomeCTA.jsx'

export default function Home() {
    return (
        <>
            <Hero />
            <ServicesShort />
            <FeaturedProjects />
            <OurClients />
            <FAQ />
            <HomeCTA />
        </>
    ) 
}
