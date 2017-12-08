/**
 * Render the bio as a unordered list.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from 'containers/App/constants';
const { lightGrey } = COLORS; // forcing the existence of parameters.

const Wrapper = styled.div`
  /* Flex-box */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  
  /* Font */
  color: ${lightGrey};
  line-height: 1em;
  font-size: 1em;
  font-family: 'Lato', sans-serif;
  
  span {
    padding: 0.25em;
  }
`;

const Bio = ({ bio }) => (
  <Wrapper>
    {bio.map((item) =>
      <span key={`bio-${item}`}>~/{item}</span>
    )}
  </Wrapper>
);

Bio.propTypes = {
  bio: PropTypes.array.isRequired,
};

export default Bio;
