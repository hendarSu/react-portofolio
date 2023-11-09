import { postRegistration } from "@/rest/api";
import Link from "next/link";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import ToastNotifiaction from "./Toast";
import { useRouter } from "next/router";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isSuccess = await postRegistration({
      name,
      email,
      password,
      confirmationPassword,
    });

    if (isSuccess && isSuccess.status === "success") {
      setShowToast(true);
      setToastMessage(isSuccess.message);
      setToastColor("");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };

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
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId="formBasicName">
                <Form.Control
                  required
                  type="text"
                  placeholder="Fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="formBasicConfirmationPassword"
              >
                <Form.Control
                  required
                  type="password"
                  placeholder="Konfirmasi Password"
                  value={confirmationPassword}
                  onChange={(e) => setConfirmationPassword(e.target.value)}
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
          </div>
        </Col>
      </Row>

      <ToastNotifiaction
        show={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
        color={toastColor}
      />
    </section>
  );
};

export default RegistrationForm;
