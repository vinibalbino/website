import Hero from '@/components/Hero'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Testimonials from '@/components/Testimonials'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Pricing from '@/components/Pricing/Pricing'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FAQ from '@/components/FAQ'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logos from '@/components/Logos'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Benefits from '@/components/Benefits/Benefits'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Container from '@/components/Container'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Section from '@/components/Section'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Stats from '@/components/Stats'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CTA from '@/components/CTA'

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container>
        {/* <Benefits /> */}

        {/* <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section> */}

        {/* <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section> */}

        {/* <FAQ /> */}

        {/* <Stats /> */}

        {/* <CTA /> */}
      </Container>
    </>
  )
}

export default HomePage
