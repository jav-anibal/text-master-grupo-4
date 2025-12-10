const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('debería devolver mensaje de bienvenida', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toContain('Bienvenido a TextMaster API');
    expect(response.body.message).toContain('Servidor:');
  });

  it('debería incluir timestamp', async () => {
    const response = await request(app).get('/');
    
    expect(response.body).toHaveProperty('timestamp');
    expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
  });
});
