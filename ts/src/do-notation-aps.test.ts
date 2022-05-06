import { number } from "fp-ts"
import * as E from "fp-ts/lib/Either"
import { pipe } from "fp-ts/lib/function"
import { sequenceT, sequenceS } from "fp-ts/lib/Apply"

// I used this to write: 2022-04-17-do-notation-in-fp-ts-with-aps blog post.

// I like to use "do" notation  with Either/TaskEither monads which I often use.

const fetchX:
    () => E.Either<Error, number> =
    () => E.right(1)

const fetchY:
    () => E.Either<Error, string> =
    () => E.right("")

// Let's imagine we need both x and y.
pipe(
    fetchX,
    fetchY
)
//is wrong.
//Before I learned to use "do" I used to handle this problem like so:

pipe(
    [fetchX(), fetchY()] as [E.Either<Error, number>, E.Either<Error, string>],
    (t) => sequenceT(E.either)(...t),   // convert a tuple of eithers to either of tuple
    E.fold(
        error => { }, // in case of error
        ([x, y]) => { } // x: number , y: string
    )
)

// This approach is effective but looks strange, is unreadable.
// But with do notation with apS:

pipe(
    E.Do,
    E.apS("x", fetchX()),
    E.apS("y", fetchY()),
    E.fold(
        error => { },
        ({ x, y }) => { }
    )
)
//looks cleaner.

describe("", () => {
    test("", () => {

    })
})
