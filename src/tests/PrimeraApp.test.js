import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

import '@testing-library/jest-dom/extend-expect';

describe('Pruebas en <PrimeraApp />', () => {

    test('debe mostrar el mensaje "Hola, Soy Tony"', () => {

        const saludo = 'Hola, Soy Tony';

        const {getByText} = render( <PrimeraApp saludo = { saludo } /> );

        expect(getByText(saludo) ).toBeInTheDocument();

    });


})
