import { useEffect, useState } from "react";
import FeatureItem from "./FeatureItem";
import featuresData from "@/utils/data/features.json";

const Feature = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(featuresData);
  }, []);

  return (
    <section>
      <hr />
      <div className="row">
        {features.map((data, index) => {
          return (
            <div className="col-md-3" key={index}>
              <FeatureItem></FeatureItem>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feature;
