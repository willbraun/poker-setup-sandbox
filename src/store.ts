import { writable, get } from 'svelte/store'
import type { Writable } from 'svelte/store'

export type nullableNum = number | null
export type StoreNumber = Writable<nullableNum>

export interface ChipRowData {
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

export const redChip: ChipRowData = {
	color: writable('red'),
	totalCount: writable(null),
	value: writable(null),
	playerCount: writable(null),
}

export const greenChip: ChipRowData = {
	color: writable('green'),
	totalCount: writable(null),
	value: writable(null),
	playerCount: writable(null),
}

export const blackChip: ChipRowData = {
	color: writable('black'),
	totalCount: writable(null),
	value: writable(null),
	playerCount: writable(null),
}

const blankChip: ChipRowData = {
	color: writable(''),
	totalCount: writable(null),
	value: writable(null),
	playerCount: writable(null),
}

// make this a writable array once we add new colors
export const activeChips = [redChip, greenChip, blackChip]

export let sumTotalCount: StoreNumber = writable(0)

const getSumTotalCount = () => {
	sumTotalCount.set(activeChips.map(chip => get(chip.totalCount)).reduce((a, b) => a + b))
}

redChip.totalCount.subscribe(_ => {
	getSumTotalCount()
})

sumTotalCount.subscribe(value => console.log(value))
