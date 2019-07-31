import React from 'react';
import { shallow } from 'enzyme';

import ModalError from './modalError.jsx';

const setup = (error) => {
  const actions = {
    handleErrorClose: jest.fn(),
  };

  const component = shallow(
    <ModalError
      error={error}
      {...actions}
    />
  );

  return {
    component: component,
    actions: actions,
    overlay: component.find('#error-modal__overlay'),
    close: component.find('#error-modal__close'),
    message: component.find('#error-modal__message'),
  }
};

describe('Test Modal Error Component', () => {

  test('Should be hidden', () => {
    const { component } = setup('');
    expect(component.find('#error-modal__wrapper').prop('className')).toEqual('error-modal__wrapper ');
  });

  test('Should be shown', () => {
    const { component } = setup('Error');
    expect(component.find('#error-modal__wrapper').prop('className')).toEqual('error-modal__wrapper show');
  });

  test('Should close by hit the overlay', () => {
    const { actions, overlay } = setup('error');
    overlay.simulate('click');
    expect(actions.handleErrorClose).toBeCalled();
  });

  test('Should close by hit the close button', () => {
    const { actions, close } = setup('error');
    close.simulate('click');
    expect(actions.handleErrorClose).toBeCalled();
  });

});