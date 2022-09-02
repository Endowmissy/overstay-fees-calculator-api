import request from 'supertest';
import { app } from '../../src/config';

describe('welcome message', () => {
    test('should send welcome message on home route request', async() => {
        const response = await request(app)
        .get('/')
        .set('Content-Type', 'application/json')

        expect(response.status).toEqual(200)
        expect(response.body.message).toBe(`Welcome to Ayomikun's Hotel Overstay Fees Calculator API`)
    }) 
})
