<script lang="ts">
	import type { ChipData } from '../store'
	import NumInput from './NumInput.svelte'
	import { formatInteger, formatMoney } from '../util'
	export let chip: ChipData

	let color = chip.color
	let totalCount = chip.totalCount
	let chipValue = chip.value
	let playerCount = chip.playerCount
</script>

<div class="row gx-0 border-bottom chip-row ">
	<div class="border-end col-2">
		<p>{$color}</p>
	</div>
	<div class="border-end col-2">
		<NumInput id={`${$color}-total-count`} format={formatInteger} bind:value={$totalCount} />
	</div>
	<div class="border-end col-2">
		<p id="dollar-sign">$</p>
		<NumInput id={`${$color}-value`} format={formatMoney} bind:value={$chipValue} />
	</div>
	<div class="border-end col-2">
		<p>${formatMoney($totalCount * $chipValue)}</p>
	</div>
	<div class="border-end col-2">
		<NumInput id={`${$color}-player-count`} format={formatInteger} bind:value={$playerCount} />
	</div>
	<div class="col-2">
		<p>${formatMoney($playerCount * $chipValue)}</p>
	</div>
</div>

<style>
	.chip-row > div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.chip-row p {
		margin: 0;
	}

	#dollar-sign {
		margin-right: 8px;
	}
</style>
