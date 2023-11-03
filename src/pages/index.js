import Head from 'next/head'
import { Inter } from 'next/font/google'

import { Container } from 'react-bootstrap'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Feature from '@/components/Feature'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Feature></Feature>
    </Layout>
  )
}
