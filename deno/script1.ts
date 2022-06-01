import * as E from "https://deno.land/x/fp_ts@v2.11.4/Either.ts"
import * as TE from "https://deno.land/x/fp_ts@v2.11.4/TaskEither.ts"

import { assertEquals, assert } from "https://deno.land/std@0.141.0/testing/asserts.ts"

const x: E.Either<number, string> = E.right("qw")

interface User {
    name: string
}

const f:
    (n: number) => TE.TaskEither<string, User> =
    n => TE.right({ name: "lukhen" })


Deno.test("Some test", async () => {
    const x = await f(2)()
    assert(E.isRight(x), "fetch failed")
})

Deno.test("First deno test", () => {
    assertEquals(x, E.right("qw"), "failed because of some reason")
})

