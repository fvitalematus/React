import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // test('debe mostrar el mensaje "Hola, Soy Tony"', () => {
    // const saludo = 'Hola, Soy Tony';
    // const {getByText} = render( <PrimeraApp saludo = { saludo } /> );
    // expect(getByText(saludo) ).toBeInTheDocument();
    // });

    test('debe mostrar <PrimeraApp /> correctamente ', () => {

        const saludo = 'Hola, Soy Tony';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();

    });


    test('debe mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, Soy Tony';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subTitulo);

    });


})
