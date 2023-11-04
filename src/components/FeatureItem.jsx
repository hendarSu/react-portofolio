import { Image } from "react-bootstrap";

const FeatureItem = () => {
    return (
        <div className="card mb-2">
            <Image src="https://img.freepik.com/free-photo/happy-teen-girl-playing-baseball_23-2148209546.jpg?w=2000&t=st=1698931851~exp=1698932451~hmac=342872d023a09eac8def652c90517e72776ec15430bd21306496db7a7e191b8a" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default FeatureItem;