import LayoutContext from "@/context/LayoutContext";
import { removeCookie } from "@/utils/cookies";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

export default function NavbarOurSystem() {
  const router = useRouter();

  const { isLogin } = useContext(LayoutContext);

  const logout = () => {
    removeCookie("userData");
    router.reload("/");
  };

  const login = () => {
    router.push("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/project">Our Project</Nav.Link>
          </Nav>
          {isLogin ? (
            <Button onClick={logout} className="btn-sm btn-danger">
              Logout
            </Button>
          ) : (
            <Button onClick={login} className="btn-sm btn-primary">
              Login
            </Button> 
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
