import { Image } from "react-bootstrap";

const FeatureItem = ({ name, cover, summary, link }) => {
  return (
    <div className="card mb-2">
      <Image src={cover} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{summary}</p>
        <a href={link} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default FeatureItem;
