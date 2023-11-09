import ProjectList from "@/components/Project";
import { getCookie } from "@/utils/cookies";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Project() {
    const router = useRouter();

    useEffect(() => {
        const token = getCookie('userData');
        if (!token) {
            router.push("/login")
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