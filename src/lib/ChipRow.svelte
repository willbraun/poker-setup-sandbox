<script lang="ts">
	import type { ChipRowData2 } from '../store'
	import NumInput from './NumInput.svelte'
	import { formatDecimal, formatInteger } from '../util'
	export let chipRowData: ChipRowData2

	let totalCount = chipRowData.totalCount
</script>

<div class="chip-row row">
	<div class="col-1">
		<p>Color picker</p>
	</div>
	<div class="border-end col-1">
		<p>X</p>
	</div>
	<div class="border-end col-2">
		<NumInput id={`red-total-count`} format={formatInteger} bind:value={$totalCount} />
	</div>
	<div class="border-end col-2">
		<!-- <NumInput id={`${chipRowData.color}-value`} format={formatDecimal} value={chipRowData.value} /> -->
	</div>
	<div class="border-end col-2">
		<!-- <p>${chipRowData.totalCount * chipRowData.value}</p> -->
	</div>
	<div class="border-end col-2">
		<!-- <NumInput id={`${chipRowData.color}-player-count`} format={formatInteger} value={chipRowData.playerCount} /> -->
	</div>
	<div class="border-end col-2">
		<!-- <p>${chipRowData.playerCount * chipRowData.value}</p> -->
	</div>
</div>

<style>
</style>
