import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { IntlProvider } from 'react-intl';
import ReactGA from 'react-ga'; // Google analytics
import getTrackerId from 'containers/GATracker/trackerId';
import { contactInfo } from 'containers/Profile/constants';
import EmailLink from '../index';

configure({ adapter: new Adapter() }); // configure Enzyme with ES16 Adapter
jest.mock('react-ga');
ReactGA.initialize(getTrackerId(), { debug: false });

describe('<EmailLink />', () => {
  const renderComponent = (props = contactInfo) => shallow(<EmailLink {...props} />).dive();

  it('should render an <a> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('a');
  });

  it('should render with prop: ', () => {
    it('href', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('href')).toBeDefined();
    });

    it('title', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('title')).toBeDefined();
    });

    it('text', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('text')).toBeDefined();
    });

    it('target', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('target')).toBeDefined();
    });

    it('onClick', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('onClick')).toBeDefined();
    });
  });

  it('should send Google Analytics event on click', () => {
    sinon.spy(ReactGA, 'event');
    const mountComponent = mount(
      <IntlProvider locale="en">
        <EmailLink {...contactInfo} />
      </IntlProvider>
    );
    mountComponent.find('a').simulate('click');
    expect(ReactGA.event.calledOnce).toEqual(true);
    ReactGA.event.restore();
  });
});
