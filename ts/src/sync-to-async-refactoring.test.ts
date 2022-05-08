interface User {
    userId: string
    name: string
}

const getUser:
    (id: string) => User =
    id => ({ userId: id, name: `${id}-name` })

const getUserName:
    (userId: string) => string =
    userId => (getUser(userId).name)

describe("", () => {
    test("", () => {
        expect(getUserName("a")).toEqual(getUser("a").name)
    })
})
