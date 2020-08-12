import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con Promesas', () => {

    test('debe retornar un Heroe async ', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toBe(heroes[0]);
                done();

            });
    });

    test('debe retornar un error si el heroe por id no existe ', (done) => {

        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe('No se pudo encontrar el héroe');
                done();

            });
    });


})
