import ProjectList from "@/components/Project";
import GlobalContext from "@/contexts/GlobalContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Project() {
    const { isLogin } = useContext(GlobalContext);
    const router = useRouter();
    
    useEffect(() => {
        if (!isLogin) {
            router.push("/login");
        }
    }, [])

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div className="text-center">
                        <h1>
                            Our Projects
                        </h1>
                    </div>
                </Col>
            </Row>
            <ProjectList />
        </Container>
    )
}