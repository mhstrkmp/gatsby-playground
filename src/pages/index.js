import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import ProjectData from "../content/projects.json";

const HomePageWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  section:not(:first-child) {
    margin-bottom: 5rem;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  article {
    grid-row: 2 / 4;
  }
`;

const ProjectsSection = styled.section`
  // Styling
`;

const CardsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  align-items: stretch;
`;

const Home = () => {
  return (
    <HomePageWrapper>
      <HeroSection id="intro">
        <article>
          <h2>Hello Gatsby!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ab cupiditate numquam odit quidem quo culpa ad, esse velit id
            commodi sequi hic aspernatur distinctio recusandae corporis animi
            optio ipsa temporibus nesciunt earum totam quaerat autem odio! Vitae
            eaque, illo animi doloremque in, deleniti alias, labore cupiditate
            obcaecati ab aut.
          </p>
        </article>
      </HeroSection>
      <ProjectsSection id="work">
        <h2>Some Things I Made ...</h2>
        <CardsSection>
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
        </CardsSection>
      </ProjectsSection>
      <section id="contact">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ab cupiditate numquam odit quidem quo culpa ad, esse velit id commodi
          sequi hic aspernatur distinctio recusandae corporis animi optio ipsa
          temporibus nesciunt earum totam quaerat autem odio!
        </p>
      </section>
    </HomePageWrapper>
  );
};

export default Home;
