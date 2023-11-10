import GlobalContext from "@/contexts/GlobalContext";
import { postLogin, postRegistrtion } from "@/rest/api";
import { getCookie, setCookie } from "@/utils/cookies";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

export default function LoginFrom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const serviceRegistrtion = async (e) => {
    e.preventDefault();
    const isSuccess = await postLogin(
        {
            email,
            password
        }
    )

    if (isSuccess && isSuccess.status === 'success') {
        setCookie("userData", JSON.stringify(isSuccess.data), {
            expires: 1
        })
        
        router.push("/");
    }

  }

  useEffect(() => {
    const userData = getCookie("userData")
    if(userData) {
        router.push("/");
    }
  },[])
  
  return (
    <Row>
      <Col md={6}>
        <h1>Selamat datang, Silahkan Login!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum
          sint cupiditate? Nostrum eum amet distinctio eaque magnam error iure.
        </p>
      </Col>
      <Col md={6}>
        {/* fullname, email, password, confirmpassword */}
        <Form onSubmit={serviceRegistrtion} className="mt-2">
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
      </Col>
    </Row>
  );
}
