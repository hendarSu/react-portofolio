import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { getProjects } from "@/rest/api";
import ToastNotifiaction from "./Toast";


const ProjectList = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProjects();
        setFeatures(projectData);
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

export default ProjectList;
