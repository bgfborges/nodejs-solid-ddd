import ServerTest from "@test/jest-setup";

describe('First test to check api status', () => {
    it('should return a forecast with just a few times', async () => {
        const server = new ServerTest();
        const { body, status } = await server.test().get('/api-status');

        expect(status).toBe(200);
        expect(body).toHaveProperty('message');
        expect(body.message).toBe('up-to-date');
    });
});