import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  return (
    <section>
      <hr />
      <Row>
        <Col md={6}>
          <h1>Selamat datang di sistem kami!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            dolores voluptate sint reiciendis at. Ea autem iure eum fugiat
            debitis esse, consequuntur in facilis provident fuga neque iusto
            magni quasi.
          </p>
        </Col>
        <Col md={6}>
          <div className="shadow-sm p-4 border">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <hr />
              <div className="d-flex justify-content-end flex-column">
                <Button variant="primary" className="" type="submit">
                  Login
                </Button>
                <div className="float-right mt-2">
                  <p>
                    Tidak punya akun?{" "}
                    <Link className="" href={"/registrasi"}>
                      Registrasi
                    </Link>
                  </p>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default LoginForm;
