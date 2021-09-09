const createApp = require("./index")
const request = require("supertest");
const { response } = require("express");

const getUser = jest.fn()
const index = createApp({
    getUser
})

describe('User register in API testing',()=>{
    it('should run', ()=>{});

    it('POST /authenticate --> should return 404 when user is not registered in database', ()=>{
        getUser.mockClear()
        getUser.mockReturnValue(null)

        return request(index).post("/authenticate")
            .send({
                username:"emptyUser",
                password:"pas1234"
            })
            .expect(404).then(
                (response)=>{
                    expect(getUser.mock.calls.length).toBe(1)
                }
            )
    });

    it('POST /authenticate --> should return user information when user is in database', ()=>{
        getUser.mockClear()
        getUser.mockReturnValue({
            username:"User Six",
            password:"Pa55word.",
            user_Id: 6
        })

        return request(index).post("/authenticate")
            .send({
                username:"User Six",
                password:"Pa55word.",
            })
            .expect(200)
            .expect('Content-Type',/json/)
            .then(
                (response)=>{
                expect(response.body).toEqual(
                    expect.objectContaining({
                        username: expect.any(String),
                        password: expect.any(String),
                        user_Id:expect.any(Number)
                    })
                );
                
                expect(getUser.mock.calls.length).toBe(1)

            })
    });
})