import GlobalContext from "@/contexts/GlobalContext";
import { removeCookie } from "@/utils/cookies";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

export default function NavbarOurSystem() {
  const { isLogin } = useContext(GlobalContext);

  const router = useRouter();

  const logout = () => {
    removeCookie("userData");
    router.reload("/");
  };

  const login = () => {
    router.push("/login");
  };

  const project = () => {
    router.push("/project");
  };

  const home = () => {
    router.push("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={home}>Home</Nav.Link>
            <Nav.Link onClick={project}>Our Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {isLogin ? (
          <Button onClick={logout} className="btn-sm btn-danger">
            Logout
          </Button>
        ) : (
          <Button onClick={login} className="btn-sm btn-primary">
            Login
          </Button>
        )}
      </Container>
    </Navbar>
  );
}
