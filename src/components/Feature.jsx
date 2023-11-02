import FeatureItem from "./FeatureItem";

const Feature = () => {
  return (
    <section>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <FeatureItem></FeatureItem>
        </div>
        <div className="col-md-3">
          <FeatureItem></FeatureItem>
        </div>
        <div className="col-md-3">
          <FeatureItem></FeatureItem>
        </div>
        <div className="col-md-3">
          <FeatureItem></FeatureItem>
        </div>
      </div>
    </section>
  );
};

export default Feature;
