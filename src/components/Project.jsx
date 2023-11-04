import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import featuresData from "@/utils/data/projects.json";

const ProjectList = () => {
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
              <CardItem
                name={data.name}
                cover={data.cover}
                summary={data.summary}
                link={data.link}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectList;
