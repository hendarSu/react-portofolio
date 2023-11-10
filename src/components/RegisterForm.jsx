import Link from "next/link";
import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

export default function RegisterForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  return (
    <Row>
      <Col md={6}>
        <h1>Selamat datang di perusahan Kami!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum
          sint cupiditate? Nostrum eum amet distinctio eaque magnam error iure.
        </p>
      </Col>
      <Col md={6}>
        {/* fullname, email, password, confirmpassword */}
        <Form className="mt-2">
          <Form.Group className="mb-2">
            <Form.Control
              required
              type="text"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              required
              type="mail"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              required
              type="password"
              placeholder="Konfirmaswi Password"
              value={confirmationPassword}
              onChange={(e) => {
                setConfirmationPassword(e.target.value);
              }}
            />
          </Form.Group>
          <hr />
          <div className="d-flex justify-content-end flex-column">
            <Button variant="primary" className="" type="submit">
              Registrasi
            </Button>
            <div className="float-right mt-2">
              <p>
                Sudah punya akun?{" "}
                <Link className="" href={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
