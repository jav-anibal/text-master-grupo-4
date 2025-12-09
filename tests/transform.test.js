const request = require('supertest');
const app = require('../src/app');

describe('GET /transform', () => {
  
  describe('Transformaciones exitosas', () => {
    it('debería convertir a mayúsculas', async () => {
      const response = await request(app)
        .get('/transform')
        .query({ text: 'hola', action: 'upper' });
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        original: 'hola',
        action: 'upper',
        transformed: 'HOLA'
      });
    });

    it('debería convertir a minúsculas', async () => {
      const response = await request(app)
        .get('/transform')
        .query({ text: 'HOLA', action: 'lower' });
      
      expect(response.status).toBe(200);
      expect(response.body.transformed).toBe('hola');
    });

    it('debería aceptar action en mayúsculas', async () => {
      const response = await request(app)
        .get('/transform')
        .query({ text: 'test', action: 'UPPER' });
      
      expect(response.status).toBe(200);
      expect(response.body.transformed).toBe('TEST');
    });
  });

  describe('Validaciones', () => {
    it('debería devolver 400 si falta text', async () => {
      const response = await request(app)
        .get('/transform')
        .query({ action: 'upper' });
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toContain('text');
    });

    it('debería devolver 400 si falta action', async () => {
      const response = await request(app)
        .get('/transform')
        .query({ text: 'hola' });
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body).toHaveProperty('validActions');
    });

    it('debería devolver 400 con acción inválida', async () => {
      const response = await request(app)
        .get('/transform')
        .query({ text: 'hola', action: 'invalid' });
      
      expect(response.status).toBe(400);
      expect(response.body.error).toContain('inválida');
    });
  });
});
