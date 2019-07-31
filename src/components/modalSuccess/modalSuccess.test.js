import React from 'react';
import { shallow } from 'enzyme';

import ModalSuccess from './modalSuccess.jsx';

const setup = (message) => {
  const actions = {
    handleModalSuccessClose: jest.fn(),
  };

  const component = shallow(
    <ModalSuccess
      message={message}
      {...actions}
    />
  );

  return {
    component: component,
    actions: actions,
    overlay: component.find('#success-modal__overlay'),
    close: component.find('#success-modal__close'),
    message: component.find('#success-modal__message'),
  }
};

describe('Test Modal Success Component', () => {

  test('Should be hidden', () => {
    const { component } = setup('');
    expect(component.find('#success-modal__wrapper').prop('className')).toEqual('success-modal__wrapper ');
  });

  test('Should be shown', () => {
    const { component } = setup('Success');
    expect(component.find('#success-modal__wrapper').prop('className')).toEqual('success-modal__wrapper show');
  });

  test('Should close by hit the overlay', () => {
    const { actions, overlay } = setup('Success');
    overlay.simulate('click');
    expect(actions.handleModalSuccessClose).toBeCalled();
  });

  test('Should close by hit the close button', () => {
    const { actions, close } = setup('Success');
    close.simulate('click');
    expect(actions.handleModalSuccessClose).toBeCalled();
  });

});