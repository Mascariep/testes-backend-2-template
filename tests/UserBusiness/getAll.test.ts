import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { USER_ROLES } from "../../src/types"

describe("Teste do getAll", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deve retornar lista de usuários", async () => {
        const response = await userBusiness.getAll()

        expect(response).toHaveLength(2)
        expect(response).toContainEqual({
            id: "id-mock",
            name: "Admin Mock",
            email: "admin@email.com",
            password: "hash-bananinha",
            createdAt: expect.any(String),
            role: USER_ROLES.ADMIN
        })
    })
    

})