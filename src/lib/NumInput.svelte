<script lang="ts">
	import type { nullableNum } from './../store'
	export let id: string, format: Function, value: nullableNum

	const toNullableNum = (display: string): nullableNum => {
		if (display === '') return null
		return Number(display)
	}

	let rawValue: string = ''
	$: displayString = format(rawValue) as string
	$: value = toNullableNum(displayString)
</script>

<input
	class="num-input"
	{id}
	value={displayString}
	on:change={e => {
		const input = e.currentTarget.value
		const inputNum = Number(input)

		if (Number.isNaN(inputNum) || inputNum < 0 || format(input) === displayString) {
			displayString += ' '
			displayString = format(rawValue)
		} else {
			rawValue = input
		}
	}}
/>

<style>
	.num-input {
		width: 100%;
		text-align: center;
	}
</style>
