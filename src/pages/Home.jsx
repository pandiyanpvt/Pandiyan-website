import Hero from '../components/Hero.jsx'
import PageLinkCards from '../components/PageLinkCards.jsx'
import ServicesShort from '../components/ServicesShort.jsx'
import FeaturedProjects from '../components/FeaturedProjects.jsx'
import FAQ from '../components/FAQ.jsx'
import HomeCTA from '../components/HomeCTA.jsx'

export default function Home() {
    return (
        <>
            <Hero />
            <PageLinkCards />
            <ServicesShort />
            <FeaturedProjects />
            <FAQ />
            <HomeCTA />
        </>
    ) 
}
