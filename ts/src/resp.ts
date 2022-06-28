import { Functor1, Functor, Functor2, map as xxx } from "fp-ts/Functor"
import { HKT, URItoKind, URIS, URIS2, Kind2, Kind } from "fp-ts/HKT"
import * as A from "fp-ts/lib/Array"
import * as O from "fp-ts/lib/Option"
import * as E from "fp-ts/lib/Either"

export const AURI = "Array"
export const OURI = "Option"
export const EURI = "Either"
export type AURI = typeof AURI
export type OURI = typeof OURI
export type EURI = typeof EURI

export const functorArray: Functor1<AURI> = {
    URI: AURI,
    map: (fa, f) => fa.map(f)
}

export const functorOption: Functor1<OURI> = {
    URI: OURI,
    map: (fa, f) => O.map(f)(fa)
}

export const functorEither: Functor2<EURI> = {
    URI: EURI,
    map: (fa, f) => E.map(f)(fa)
}



xxx(functorOption, functorOption)


export const URI = 'Resp'

export type URI = typeof URI

declare module 'fp-ts/HKT' {
    interface URItoKind<A> {
        Resp: Resp<A>
    }


}

export interface Resp<A> {
    url: string
    status: number
    headers: Record<string, string>
    body: A
}

function map<A, B>(fa: Resp<A>, f: (a: A) => B): Resp<B> {
    return { ...fa, body: f(fa.body) }
}

export const functorResp: Functor1<URI> = {
    URI,
    map
}


function mapX<M, A>(x: HKT<M, A>, f: (y: HKT<M, A>) => A): A {
    return f(x)
}


const f: (r: Resp<string>, f: (r: Resp<string>) => string) => string =
    (r, f) => ""

const a: Resp<string> = {
    url: "",
    status: 2,
    headers: {},
    body: ""
}

const fmap: <M, A, B>(f: Functor<M>) => (ab: (a: A) => B) => (ma: HKT<M, A>) => HKT<M, B> =
    f => ab => ma => f.map(ma, ab)



export function lift<F extends URIS2>(
    F: Functor2<F>
): <A, B>(f: (a: A) => B) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
export function lift<F extends URIS>(F: Functor1<F>): <A, B>(f: (a: A) => B) => (fa: Kind<F, A>) => Kind<F, B>
export function lift<F>(F: Functor<F>): <A, B>(f: (a: A) => B) => (fa: HKT<F, A>) => HKT<F, B> {
    return (f) => (fa) => F.map(fa, f)
}

const z: (s: string) => number =
    s => s.length

const l = lift(functorResp)(z)(a)
l.body






interface myFunctor<M> {
    map: <A, B>(ab: (a: A) => B) => (ma: HKT<M, A>) => HKT<M, B>
}

