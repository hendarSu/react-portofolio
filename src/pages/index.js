import { Container } from 'react-bootstrap'

import Hero from '@/components/Hero'
import Feature from '@/components/Feature'

export default function Home() {
  return (
    <Container >
      {/* Section Hero */}
      <Hero></Hero>

      {/* Section Feature */}
      <Feature />
    </Container>
  )
}
