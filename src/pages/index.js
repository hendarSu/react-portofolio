import { Container } from 'react-bootstrap'

import Hero from '@/components/Hero'
import Feature from '@/components/Feature'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* Component children */}
      <Container >
        {/* Section Hero */}
        <Hero></Hero>

        {/* Section Feature */}
        <Feature></Feature>
      </Container>
    </Layout>
  )
}
