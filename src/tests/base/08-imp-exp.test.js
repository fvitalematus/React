import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

import '@testing-library/jest-dom';


describe('Pruebas en funciones de Heroes', () => {

    test('debe retornar un heroe por id ', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);

    });

    test('debe retornar undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    });

    test('debe retornar un arreglo con los heroes de DC ', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes).toEqual(heroesData);

    })

    // toEqual: analiza cada uno de los objetos para evaluar si tienen las mismas prop. y valores
    // toBe Equidad:Tanto el tipo como el contenido sean el mismo

    test('debe retornar un arreglo con los heroes de Marvel ', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    })

})
