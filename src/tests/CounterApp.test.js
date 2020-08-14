import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Pruebas en el <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    // Antes de todo, para volver inicializar las pruebas antes de sus evaluaciones
    beforeEach(() => {

        wrapper = shallow(<CounterApp />);

    });

    test('debe mostrar <CounterApp /> correctamente', () => {

        // Para renderizar el DOM se aplica el Snapshot
        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={100} />);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');

    });

    test('debe incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('1');

    });

    test('debe disminuir con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('-1');

    });


});