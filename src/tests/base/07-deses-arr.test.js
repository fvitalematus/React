import { retornaArreglo } from '../../base/07-deses-arr';
import '@testing-library/jest-dom'


describe('Pruebas en desestructuración', () => {

    test('debe retornar un string y un numero ', () => {

        const [letras, numeros] = retornaArreglo(); // ['ABC', 123];

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    })

})
