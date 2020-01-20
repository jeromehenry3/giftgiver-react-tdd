import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    const gift = shallow(<Gift />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({ person: '', present: '' });
    })

    describe('when typing into the person input', () => {
        const person = 'Robert'

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person } });
        });

        it('updates the person in the `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });

    describe('when typing into the present input', () => {
        const present = 'Un livre de Spinoza';

        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: present } });
        })
        it('updates the present in the `state`', () => {
            expect(gift.state().present).toEqual(present);
        })
    })
})
