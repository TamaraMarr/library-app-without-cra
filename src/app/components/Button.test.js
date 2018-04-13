import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {
    it('Should render text', () => {
        const wrapper = shallow(<Button text="Dodaj" handler={jest.fn()} />);
        expect(wrapper.find('button').props().children).toEqual('Dodaj');
    });

    it('Should call shouldComponentUpdate', () => {
        spyOn(Button.prototype, 'shouldComponentUpdate').and.callThrough();
        const wrapper = shallow(<Button text="Dodaj" handler={jest.fn()} />);
        wrapper.setProps({text: 'nesto drugo'});
        expect(Button.prototype.shouldComponentUpdate).toHaveBeenCalledTimes(1);
    })

    it('Should not be updated', () => {
        const wrapper = shallow(<Button text="Dodaj" handler={jest.fn()} />);
        const fnCall = wrapper.instance().shouldComponentUpdate({text: 'Dodaj'}, null);
        expect(fnCall).toBe(false);
    })

    it('Should call handler', () => {
        const onClickF = jest.fn();
        const wrapper = shallow(<Button text="Dodaj" handler={onClickF} />);
        wrapper.find('button').simulate('click');
        expect(onClickF).toHaveBeenCalledTimes(1);
    });
});