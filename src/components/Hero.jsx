import { Col, Row, Image } from "react-bootstrap";

const Hero = () => {
    return (
        <section>
            <hr />
            <Row>
                <Col md={6}>
                    <h1>
                        Ini Content Hero
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem dolores voluptate sint reiciendis at. Ea autem iure eum fugiat debitis esse, consequuntur in facilis provident fuga neque iusto magni quasi.
                    </p>
                </Col>
                <Col md={6}>
                    <Image src="https://img.freepik.com/free-photo/close-up-hand-holding-basket-ball_23-2149160526.jpg?w=2000&t=st=1698930367~exp=1698930967~hmac=b160d34c6f416791e32088a9b3fae5f97303331abf0b996fe7ebd514ffe9ce50" rounded width={"100%"} />
                </Col>
            </Row>
        </section>
    )
}

export default Hero;