import { Container } from 'react-bootstrap'
import Layout from '@/components/Layout'
import LoginForm from '@/components/LoginForm'

export default function Login() {
  return (
    <Layout>
      <Container >
        <LoginForm/>
      </Container>
    </Layout>
  )
}
