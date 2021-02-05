import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.article`
  img {
    max-width: 100%;
  }
  h3 {
    font-size: var(--heading-4);
    margin: 1rem 0 0.75rem;
  }
  p {
    font-size: var(--smallFontSize);
  }
`;

const Card = ({ title, image, description }) => {
  return (
    <>
      <StyledCard>
        <img src={image} alt="" />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </StyledCard>
    </>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};
