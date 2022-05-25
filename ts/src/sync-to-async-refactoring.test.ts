import { pipe } from "fp-ts/lib/function"
import * as T from "fp-ts/lib/Task"
import * as IO from "fp-ts/lib/IO"

// We have a simple data type:
interface User {
    userId: string
    uname: string
}

// and 2 synchronous functions:
const getUser:
    (id: string) => IO.IO<User> =
    id => IO.of({ userId: id, uname: `${id}-name` })

const getUserName:
    (userId: string) => IO.IO<string> =
    userId => pipe(
        userId,
        getUser,
        IO.map(user => user.uname)
    )

// The former one is a dependency for the latter.
// A test could look like this:
describe("", () => {
    test("", () => {
        expect(getUserName("a")()).toEqual(getUser("a")().uname)
    })
})


// Now it occurs that getUser should be async (for example fetch from a database).
// So we refactor getUser to return a Task
const getUserAsync:
    (id: string) => T.Task<User> =
    id => T.of({ userId: id, uname: `${id}-name` })
// as well as all functions that depend on it.
const getUserNameAsync:
    (userId: string) => T.Task<string> =
    userId => pipe(
        userId,
        getUserAsync,
        T.map(user => user.uname)
    )

describe("", () => {
    test("", async () => {
        const user = await getUserAsync("a")()
        const userName = await getUserNameAsync("a")()
        expect(userName).toEqual(user.uname)
    })
})
