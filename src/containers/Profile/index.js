/**
 * Profile container, containing what data should be used with which components.
 */
import React from 'react';
import Styled from 'styled-components';
import IconBar from 'components/IconBar';
import Bio from 'components/Bio';
import Header from 'components/Header';
import EmailLink from 'components/EmailLink';
import { COLORS } from 'containers/App/constants';
import Photo from './Photo';
import messages from './messages';
import photo from './photo.jpg';
import { bio, icons, contactInfo } from './constants';

const Wrapper = Styled.article`
  /* Flex-box */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
  /* Sizing */
  width: 50%;
  min-width: calc(200px + (2 * 2em) + 10vw);
  margin: auto;
  padding: 2em;
  
  /* Misc */
  position: relative;
  z-index: 1;
  background-color: ${COLORS.darkGrey.rgba(0.75)};
  border: 1px solid ${COLORS.darkGrey.rgba(0.75)};
  border-radius: 0.25em;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  
  opacity: 0;
  
  /* Animations */
  @keyframes popIn {
    0% {
      transform: scale(0.95) translateZ(0);
      opacity: 0;
    }
    
    100% {
      transform: scale(1) translateZ(0);
      opacity: 1;
    }
  }

  ${({ animateIn }) => (animateIn ? 'animation: popIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;' : '')};
`;

export class Profile extends React.Component {
  constructor() {
    super();
    this.state = { animateIn: false };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad, { once: true });
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  handleLoad() {
    this.setState({ animateIn: true });
    this.removeListeners(); // this is just to ensure the listener is removed.
  }

  removeListeners() {
    window.removeEventListener('load', this.handleLoad);
  }

  render() {
    return (
      <Wrapper animateIn={this.state.animateIn}>
        <Photo src={photo} alt="Profile Photo" />
        <Header h1={messages.h1} h2={messages.h2} />
        <Bio bio={bio} />
        <IconBar icons={icons} />
        <EmailLink {...contactInfo} />
      </Wrapper>
    );
  }
}

export default Profile;
