const request = require('supertest');
const app = require('../src/app');

describe('Endpoints de Procesamiento de Texto', () => {

    describe('GET /reverse', () => {
        it('debería invertir el texto correctamente', async () => {
            const response = await request(app)
                .get('/reverse')
                .query({ text: 'hola' });

            expect(response.status).toBe(200);
            expect(response.body.reversed).toBe('aloh');
            expect(response.body.original).toBe('hola');
        });

        it('debería devolver 400 si falta el parámetro text', async () => {
            const response = await request(app).get('/reverse');

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error');
        });
    });

    describe('GET /analyze', () => {
        it('debería analizar el texto correctamente', async () => {
            const response = await request(app)
                .get('/analyze')
                .query({ text: 'hola mundo' });

            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                length: 10,
                word_count: 2,
                has_numbers: false
            });
        });

        it('debería detectar números', async () => {
            const response = await request(app)
                .get('/analyze')
                .query({ text: 'test123' });

            expect(response.status).toBe(200);
            expect(response.body.has_numbers).toBe(true);
        });

        it('debería devolver 400 si falta el parámetro text', async () => {
            const response = await request(app).get('/analyze');

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error');
        });
    });
});
