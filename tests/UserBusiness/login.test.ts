import { UserBusiness } from "../../src/business/UserBusiness"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { LoginInputDTO } from "../../src/dtos/userDTO"

describe("login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

        test("Retornar token de login da conta normal", async () => {
            const input: LoginInputDTO = {
                email: "normal@email.com",
                password: "bananinha"
            }
            const response = await userBusiness.login(input)

            expect(response.token).toBe("token-mock-normal")
            expect(response).toEqual({token: "token-mock-normal"})
        })

        test("Retornar token de login da conta normal", async () => {
            const input: LoginInputDTO = {
                email: "admin@email.com",
                password: "bananinha"
            }
            const response = await userBusiness.login(input)

            expect(response.token).toBe("token-mock-admin")
        })
})