import supertest from "supertest";
import { createTestUser, removeAllTestContacts, removeTestUser } from "./test-util.js";
import { web } from "../application/web.js";

describe('POST /api/contacts', function () {
    beforeEach(async () => {
        await createTestUser();
    })

    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    })

    it('should create new contact', async () => {
        const result = await supertest(web)
            .post("/api/contacts")
            .set('Authorization', 'test')
            .send({
                first_name: "test",
                last_name: "test",
                email: "test@example.com",
                phone: "08090000000"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined(); //Cause Auto increment
        expect(result.body.data.first_name).toBe("test");
        expect(result.body.data.last_name).toBe("test");
        expect(result.body.data.email).toBe("test@example.com");
        expect(result.body.data.phone).toBe("08090000000");
    });

    it('should reject if request is not valid', async () => {
        const result = await supertest(web)
            .post("/api/contacts")
            .set('Authorization', 'test')
            .send({
                first_name: "",
                last_name: "test",
                email: "test",
                phone: "080900000001239843895349579348573948238472834"
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});