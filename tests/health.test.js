const request = require('supertest');
const app = require('../src/app');

describe('GET /health', () => {
  it('debería devolver status UP', async () => {
    const response = await request(app).get('/health');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'UP');
  });

  it('debería devolver uptime en segundos', async () => {
    const response = await request(app).get('/health');
    
    expect(response.body).toHaveProperty('uptime');
    expect(typeof response.body.uptime).toBe('number');
    expect(response.body.uptime).toBeGreaterThanOrEqual(0);
  });

  it('debería incluir timestamp y service', async () => {
    const response = await request(app).get('/health');
    
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('service', 'TextMaster API');
  });
});
