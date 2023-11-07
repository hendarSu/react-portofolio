import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import ToastNotifiaction from "./Toast";
import { getFeatures } from "@/rest/api";
// import featuresData from "@/utils/data/features.json";

const Feature = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuresData = await getFeatures();
        setFeatures(featuresData);
      } catch (error) {
        return (
          <>
            <ToastNotifiaction
              show={true}
              message={error.message}
              onClose={100}
              color={"bg-danger"}
            />
          </>
        );
      }
    };

    fetchData();
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

export default Feature;
