import { deepStrictEqual } from "assert"
import { Lens, Traversal } from "monocle-ts"
import * as m from "monocle-ts"
import * as A from "fp-ts/lib/Array"
import { pipe } from "fp-ts/lib/function"

// I used this for writing '2022-04-17-simple-optics-in-typescript-and-fpts' blog post
// We have 3 simple types:

interface guest {
    name: string
    email: string
}

interface room {
    name: string
}

interface reservation {
    dateFrom: Date
    dateTo: Date
    guest: guest
    room: room
}


// Let's create one instance of reservation:

const res: reservation =
{
    dateFrom: new Date(),
    dateTo: new Date(),
    guest: { name: "guest name", email: "guest@email.com" },
    room: { name: "001" }
}
// In fp data is immutable, so changing a nested field would end up with
// creating new instance like this::

const newRes = {
    ...res,
    room: { ...res.room, name: "new name" }
}


// and with lens like this:
const reservationRoomNameLense = Lens.fromPath<reservation>()(["room", "name"])
deepStrictEqual(reservationRoomNameLense.set("new name")(res), newRes)

// Now I like to move all types and their lenses to their own files, to keep the code base clean.


// Now let's see how to use lense with traversal
// Let't create a list of reservations

const resList: reservation[] = [
    { dateFrom: new Date(), dateTo: new Date(), guest: { name: "a", email: "" }, room: { name: "001" } },
    { dateFrom: new Date(), dateTo: new Date(), guest: { name: "b", email: "" }, room: { name: "002" } },
    { dateFrom: new Date(), dateTo: new Date(), guest: { name: "c", email: "" }, room: { name: "003" } },
    { dateFrom: new Date(), dateTo: new Date(), guest: { name: "d", email: "" }, room: { name: "004" } }
]

// Now let's create a function, that changes the guest 'a' room to '100'
const x = m.fromTraversable(A.array)<reservation>()
    .filter(res => res.guest.name === "a")
    .modify(reservationRoomNameLense.set("100"))

deepStrictEqual(x(resList)[0].room.name, "100")

// We can see that modifying nested fields in a list of objects can be quite convenient with these optics.

describe("", () => {
    test("", () => { })
})
