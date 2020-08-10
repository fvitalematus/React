import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar Hola Franco', () => {

        const nombre = 'Franco';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');

    })

    test('getSaludo debe retornar Hola Carlos! si no hay argumento nombre ', () => {

        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');

    })



})
