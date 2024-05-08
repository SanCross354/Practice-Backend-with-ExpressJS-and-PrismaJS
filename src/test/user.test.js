import supertest from "supertest";
import { web } from "../application/web.js";
import { prismaClient } from "../application/database.js";
import { logger } from "../application/logging.js";

describe('POST /api/users', function () {

    //Using "afterEach" to delete the data after running the unit test 
    afterEach(async () => {
        await prismaClient.user.deleteMany({
            where: {
                username: "Radi"
            }
        })
    })

    //# Success Scenario
    // Test case using Jest's test function
    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'Radi',
                password: 'secret',
                name: 'Wildan Ahmad'
            });
            
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('Radi');
        expect(result.body.data.name).toBe('Wildan Ahmad');
        expect(result.body.data.password).toBeUndefined();
    });

    //Failed Scenario
    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: '',
                password: '',
                name: ''
            });
        
        logger.info(result.body);
            
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    //Duplicate Scenario
    it('should reject if username is already registered', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'Radi',
                password: 'secret',
                name: 'Wildan Ahmad'
            });

        logger.info(result.body);
            
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('Radi');
        expect(result.body.data.name).toBe('Wildan Ahmad');
        expect(result.body.data.password).toBeUndefined();

        result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'Radi',
                password: 'secret',
                name: 'Wildan Ahmad'
            });

        logger.info(result.body);
            
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});