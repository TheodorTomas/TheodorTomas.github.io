/**
 * Container around the profile photo
 */

import styled from 'styled-components';
import Img from 'components/Img';
import { COLORS } from 'containers/App/constants';
const { blueGrey } = COLORS; // forcing the green parameter to exist.

const Photo = styled(Img)`
  /* Sizing */
  max-width: 20vw;
  min-width: 18em;
  min-height: 18em;
  margin: 2.5em 0;
  
  /* Misc */
  border: 1px solid ${blueGrey};
  border-radius: 50%;
  overflow: hidden;
`;

export default Photo;
