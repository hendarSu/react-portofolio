import ProjectList from "@/components/Project";
import { Container, Row, Col } from "react-bootstrap";

export default function Project() {
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