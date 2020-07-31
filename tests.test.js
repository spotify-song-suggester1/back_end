const request = require('supertest')

const db = require('../back_end/data/dbConfig');

const server = require('../back_end/server');

describe('Writing my tests @ 6 am on friday', function() {
    describe('POST /register POST /login GET /users GET /genres', function() {
        beforeAll(async() => {
                await db('users').truncate();
            })
            //Return code 201 for a successful Post
        it('POST /api/register - should return status 201', function() {
                return request(server)
                    .post('/api/register')
                    .send({ username: "ChristianTest", password: "Password" })
                    .then(res => {
                        expect(res.status).toBe(201);
                    })
            })
            //res.type should be json
        it(' POST /api/register - res.type should match json', function() {
                return request(server)
                    .post('/api/register')
                    .send({ username: "ChristianTest2", password: "Password" })
                    .then(res => {
                        expect(res.type).toMatch(/json/i);
                    })
            })
            //Return code 200 for successful post
        it('POST /api/login - should return status 200', function() {
                return request(server).post('/api/login').send({ username: 'ChristianTest', password: 'Password' }).then(res => {
                    expect(res.status).toBe(200);
                })
            })
            //message should be Welcome
        it(' POST /api/login - message should say welcome"', function() {
                return request(server)
                    .post('/api/login')
                    .send({ username: "ChristianTest", password: "Password" })
                    .then(res => {
                        expect(res.body.message).toBe(`Welcome ChristianTest`);
                    })
            })
            //GET denied without token
        it(' GET /api/users/ - Expect to be denied without token', function() {
                return request(server)
                    .get('/api/users/')
                    .then(res => {
                        expect(res.body.message).toBe("Please provide authentication.");
                    })
            })
            //Get users in json
        it(' GET /api/users/ - Authorized', function() {
            return request(server)
                .get('/api/users/')
                .set('Authorization', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6IkNocmlzdGlhblRlc3QiLCJpYXQiOjE1OTYyMDc3MDMsImV4cCI6MTU5NjIxMTMwM30.OOu5c3SQm7DrVgahIVP0pAcy-PnNY7uo1uzglE_NWbE`)
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                })
            })
            //Get denied without token
        it(' GET /api/genres/ - Expect to be denied without token', function() {
            return request(server)
                .get('/api/genres/')
                .then(res => {
                    expect(res.body.message).toBe("Please provide authentication.");
                })
        })
        //Get genres in json
    it(' GET /api/genres/ - Authorized', function() {
        return request(server)
            .get('/api/genres/')
            .set('Authorization', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6IkNocmlzdGlhblRlc3QiLCJpYXQiOjE1OTYyMDc3MDMsImV4cCI6MTU5NjIxMTMwM30.OOu5c3SQm7DrVgahIVP0pAcy-PnNY7uo1uzglE_NWbE`)
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
         }) 
        })
}) 