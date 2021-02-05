import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import ProjectData from "../content/projects.json";

const ProjectSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  align-items: stretch;
`;

const Home = () => {
  return (
    <>
      <section>
        <h1>Hello Gatsby!</h1>
      </section>
      <ProjectSection>
        {ProjectData.content.map((data, index) => {
          return (
            <Card
              key={`card_item_${index}`}
              image={data.image}
              title={data.title}
              description={data.description}
            />
          );
        })}
      </ProjectSection>
    </>
  );
};

export default Home;
