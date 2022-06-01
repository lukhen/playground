import * as E from "https://deno.land/x/fp_ts@v2.11.4/Either.ts"
import { assertEquals } from "https://deno.land/std@0.141.0/testing/asserts.ts"

const x: E.Either<number, string> = E.right("qw")

Deno.test("First deno test", () => {
    assertEquals(x, E.right("qw"), "failed because of some reason")
})

