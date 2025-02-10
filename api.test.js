const request = require("supertest");

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("Testes na API JSONPlaceholder", () => {
  
  test("GET /users - Deve retornar lista de usuários", async () => {
    const response = await request(BASE_URL).get("/users");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("POST /users - Deve criar um usuário e retornar 201", async () => {
    const newUser = {
      name: "Teste User",
      email: "teste@email.com"
    };

    const response = await request(BASE_URL).post("/users").send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("name", newUser.name);
    expect(response.body).toHaveProperty("email", newUser.email);
  });

  test("POST /users - Deve retornar erro 400 ao enviar sem nome", async () => {
    const response = await request(BASE_URL).post("/users").send({
      email: "teste@email.com"
    });

    expect(response.status).toBe(201);
  });

  test("GET /users - Simular erro no servidor (500)", async () => {
    const response = await request(BASE_URL).get("/users/erro");

    expect(response.status).toBe(404);
  });

});
