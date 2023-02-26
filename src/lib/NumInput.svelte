<script lang="ts">
	export let format: Function

	let rawValue = 0
	$: formattedValue = format(rawValue)
</script>

<input
	class="num-input"
	value={formattedValue}
	type="number"
	min="0"
	on:change={e => {
		const num = Number(e.currentTarget.value)

		if (num > 0) {
			rawValue = num
		} else {
			formattedValue = ''
			formattedValue = format(rawValue)
		}
	}}
/>

<style>
	.num-input {
		width: 100%;
		text-align: center;
	}
</style>
