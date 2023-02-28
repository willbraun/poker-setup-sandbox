import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export const players: Writable<number> = writable(0)
export const buyIn: Writable<number> = writable(0)
export const smallBlind: Writable<number> = writable(0)
export const bigBlind: Writable<number> = writable(0)
export const buyInOverBBMin: Writable<number> = writable(0)
export const buyInOverBBMax: Writable<number> = writable(0)

// players.subscribe(value => {
// 	console.log(value)
// })
