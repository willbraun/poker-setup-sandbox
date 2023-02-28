<script lang="ts">
	import type { Writable } from 'svelte/store'
	export let format: Function, storedValue: Writable<number>

	let rawValue: string = ''
	$: displayString = format(rawValue)
	$: $storedValue = Number(displayString)
</script>

<input
	class="num-input"
	value={displayString}
	type="number"
	min="0"
	on:change={e => {
		const input = e.currentTarget.value
		if (input === '') {
			rawValue = ''
			return
		}

		if (Number(input) >= 0 && format(input) !== displayString) {
			rawValue = input
		} else {
			displayString = ''
			displayString = format(rawValue)
		}
	}}
/>

<style>
	.num-input {
		width: 100%;
		text-align: center;
	}
</style>
