import * as E from "https://deno.land/x/fp_ts@v2.11.4/Either.ts"

const x: E.Either<number, string> = E.right("qw")

console.log(x)
