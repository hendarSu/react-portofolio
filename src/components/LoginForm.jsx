import { postLogin } from "@/rest/api";
import { getCookie, setCookie } from "@/utils/cookies";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isLogin = await postLogin({
      email, password
    })

    if (isLogin && isLogin.status === "success") {
      setCookie("userData", JSON.stringify(isLogin.data), {
        expires: 1
      })
      router.push("/");
    }
  }

  useEffect(() => {
    const token = getCookie('userData');
    if (token) {
        router.push("/")
    }
  }, [])

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
