/**
 * Container around the profile photo
 */

import styled from 'styled-components';
import Img from 'components/Img';

const Photo = styled(Img)`
  // Sizing
  max-width: 20vw;
  min-width: 16em;
  min-height: 16em;
  margin: 2.5em 0;
  
  // Misc
  border: 1px solid #95A3B3;
  border-radius: 50%;
  overflow: hidden;
`;

export default Photo;
