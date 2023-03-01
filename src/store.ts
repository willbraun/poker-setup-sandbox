import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export type nullableNum = number | null
export type StoreNumber = Writable<nullableNum>

export interface ChipRowData {
	color: Writable<string>
	totalCount: StoreNumber
	value: StoreNumber
	playerCount: StoreNumber
}

export interface ChipRowData2 {
	color: Writable<string>
	totalCount: StoreNumber
	value: StoreNumber
	playerCount: StoreNumber
}

export const players: StoreNumber = writable(null)
export const buyIn: StoreNumber = writable(null)
export const smallBlind: StoreNumber = writable(null)
export const bigBlind: StoreNumber = writable(null)
export const buyInOverBBMin: StoreNumber = writable(null)
export const buyInOverBBMax: StoreNumber = writable(null)

// like this, I have to pass chipData into every chiprow so that it can update just the row it needs
// export const chipData: Writable<ChipRowData[]> = writable([
// 	{
// 		color: 'red',
// 		totalCount: 10,
// 		value: 0.05,
// 		playerCount: 3,
// 	},
// 	{
// 		color: 'green',
// 		totalCount: 10,
// 		value: 0.25,
// 		playerCount: 3,
// 	},
// 	{
// 		color: 'black',
// 		totalCount: 10,
// 		value: 1.0,
// 		playerCount: 5,
// 	},
// ])

export const redChip: ChipRowData2 = {
	color: writable('red'),
	totalCount: writable(null),
	value: writable(null),
	playerCount: writable(null),
}

export const greenChip: ChipRowData2 = {
	color: writable('green'),
	totalCount: writable(null),
	value: writable(null),
	playerCount: writable(null),
}

export const blackChip: ChipRowData2 = {
	color: writable('black'),
	totalCount: writable(null),
	value: writable(null),
	playerCount: writable(null),
}

redChip.totalCount.subscribe(value => {
	console.log(value)
})
