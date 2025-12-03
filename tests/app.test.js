const request = require('supertest');
const app = require('../src/app');

describe('TextMaster API - Tests Básicos', () => {
  test('GET / debería devolver mensaje de configuración inicial', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toContain('TextMaster API');
  });
});