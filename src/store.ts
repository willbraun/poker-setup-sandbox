import { writable, get } from 'svelte/store'
import type { Writable } from 'svelte/store'

export type nullableNum = number | null
export type StoreNumber = Writable<nullableNum>

export const players: StoreNumber = writable(null)
export const buyIn: StoreNumber = writable(null)
export const smallBlind: StoreNumber = writable(null)
export const bigBlind: StoreNumber = writable(null)
export const buyInOverBBMin: StoreNumber = writable(null)
export const buyInOverBBMax: StoreNumber = writable(null)

class Chip {
	color: Writable<string> = writable('')
	totalCount: StoreNumber = writable(null)
	value: StoreNumber = writable(null)
	playerCount: StoreNumber = writable(null)

	constructor(color: string) {
		this.color.set(color)
	}
}

export interface ChipData extends Chip {}

const chipColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black', 'brown']
const allChips = chipColors.map(color => new Chip(color))

export const activeChips = writable(allChips.slice(0, 3))

export let sumTotalCount: StoreNumber = writable(0)
export let sumTotalValue: StoreNumber = writable(0)
export let sumPlayerCount: StoreNumber = writable(0)
export let sumPlayerValue: StoreNumber = writable(0)

const getSumTotalCount = () => {
	sumTotalCount.set(
		get(activeChips)
			.map(chip => get(chip.totalCount))
			.reduce((a, b) => a + b)
	)
}

const getSumTotalValue = () => {
	sumTotalValue.set(
		get(activeChips)
			.map(chip => get(chip.totalCount) * get(chip.value))
			.reduce((a, b) => a + b)
	)
}

const getSumPlayerCount = () => {
	sumPlayerCount.set(
		get(activeChips)
			.map(chip => get(chip.playerCount))
			.reduce((a, b) => a + b)
	)
}

const getSumPlayerValue = () => {
	sumPlayerValue.set(
		get(activeChips)
			.map(chip => get(chip.playerCount) * get(chip.value))
			.reduce((a, b) => a + b)
	)
}

allChips.forEach(chip => {
	chip.totalCount.subscribe(_ => {
		getSumTotalCount()
		getSumTotalValue()
	})

	chip.value.subscribe(_ => {
		getSumTotalValue()
		getSumPlayerValue()
	})

	chip.playerCount.subscribe(_ => {
		getSumPlayerCount()
		getSumPlayerValue()
	})
})
