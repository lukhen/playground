import * as Eq from "https://deno.land/x/fp_ts@v2.11.4/Eq.ts"
import * as O from "https://deno.land/x/fp_ts@v2.11.4/Option.ts"
import {Functor1, map as xxx, Functor2, getFunctorComposition} from "https://deno.land/x/fp_ts@v2.11.4/Functor.ts"
import * as A from "https://deno.land/x/fp_ts@v2.11.4/Array.ts"
import * as E from "https://deno.land/x/fp_ts@v2.11.4/Either.ts"
import { HKT, URItoKind, URIS, URIS2, Kind2, Kind } from "https://deno.land/x/fp_ts@v2.11.4/HKT.ts"


export const OURI = "Option"
export type OURI = typeof OURI
export const AURI = "Array"
export type AURI = typeof AURI
export const EURI = "Either"
export type EURI = typeof EURI

declare module 'https://deno.land/x/fp_ts@v2.11.4/HKT.ts' {
    interface URItoKind<A> {
        Array: Array<A>
    }


}



export const optionFunctor: Functor1<OURI> = {
    URI: OURI,
    map: (fa, f) => O.map(f)(fa)
}

export const arrayFunctor: Functor1<AURI> = {
    URI: AURI,
    map: (fa, f) => A.map(f)(fa)
}

const z = y.map([O.some("")], s => s.length)

export const eitherFunctor: Functor2<EURI> = {
    URI: EURI,
    map: (fa, f) => E.map(f)(fa)
}



function mapX<M, A>(x: HKT<M, A>, f: (y: HKT<M, A>) => A): A {
    return f(x)
}
