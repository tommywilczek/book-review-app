import React from 'react'
import { mount } from 'enzyme';
import App from '../../src/App'

describe('App', () => {
    it('should display Hello, world!', () => {
        const wrapper = mount(<App />);

        const wrapperHelloText = wrapper.find('.hello').text();

        expect(wrapperHelloText).toContain('Hello, world!');
    });
});