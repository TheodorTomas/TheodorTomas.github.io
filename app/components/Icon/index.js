/**
 * An icon, an i tag
 */

import styled from 'styled-components';

const I = styled.i`
  text-decoration: none !important;
  display: flex;
  justify-content: flex-end;
  background-color: black;
  text-decoration: none !important;
  color: #777;
  font-size: 18px;

  /* unvisited link */
  &:link {
      color: #777;
  }

  /* visited link */
  &:visited {
      color: #777;
  }

  /* mouse over link */
  &:hover {
      color: white;
  }

  /* selected link */
  &:active {
      color: white;
  }
`;

/**
 * Renders an icon, enforcing the usage of the className="" tag
 */

import React, { PropTypes } from 'react';

function Icon(props) {
  return (
    <I className={props.className} />
  );
}

Icon.propTypes = {
  className: PropTypes.string,
};

export default Icon;
