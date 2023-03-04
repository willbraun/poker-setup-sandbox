<script lang="ts">
	import type { ChipRowData } from '../store'
	import NumInput from './NumInput.svelte'
	import { formatDecimal, formatInteger } from '../util'
	export let chipRowData: ChipRowData

	let totalCount = chipRowData.totalCount
	let chipValue = chipRowData.value
	let playerCount = chipRowData.playerCount
</script>

<div class="chip-row row gx-0">
	<div class="border-end col-2">
		<p>Color picker</p>
	</div>
	<div class="border-end col-2">
		<NumInput id={`${chipRowData.color}-total-count`} format={formatInteger} bind:value={$totalCount} />
	</div>
	<div class="border-end col-2">
		<NumInput id={`${chipRowData.color}-value`} format={formatDecimal} bind:value={$chipValue} />
	</div>
	<div class="border-end col-2">
		<div class="table-num">
			<p>${$totalCount * $chipValue}</p>
		</div>
	</div>
	<div class="border-end col-2">
		<NumInput id={`${chipRowData.color}-player-count`} format={formatInteger} bind:value={$playerCount} />
	</div>
	<div class="col-2">
		<div class="table-num">
			<p>${$playerCount * $chipValue}</p>
		</div>
	</div>
</div>

<style>
	.table-num {
		text-align: center;
	}
</style>
