import request from 'supertest';
import { app } from '../main';

describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app).get('/ping');
        expect(res.status).toEqual(200);
    });
});
