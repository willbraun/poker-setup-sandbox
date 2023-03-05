<script>
	import { activeChips, sumTotalCount, sumTotalValue, sumPlayerCount, sumPlayerValue } from '../store'
	import ChipRow from './ChipRow.svelte'
	import { formatMoney } from '../util'
</script>

<section>
	<div class="subheader">
		<h2>Chips</h2>
	</div>

	<div class="table">
		<div class="table-header border-bottom row">
			<div class="border-end col-2">
				<p>Color</p>
			</div>
			<div class="border-end col-2">
				<p>Total Count</p>
			</div>
			<div class="border-end col-2">
				<p>Chip Value</p>
			</div>
			<div class="border-end col-2">
				<p>Total Value</p>
			</div>
			<div class="border-end col-2">
				<p>Player Count</p>
			</div>
			<div class="col-2">
				<p>Player Value</p>
			</div>
		</div>
		<div class="table-body row">
			{#each activeChips as chip}
				<ChipRow {chip} />
			{/each}

			<!-- If no rows, show a "Click plus to add a row" message as the row -->
		</div>
		<div class="table-footer row">
			<div class="border-end col-2">
				<p>Total</p>
			</div>
			<div class="border-end col-2">
				<p>{$sumTotalCount}</p>
			</div>
			<div class="border-end col-2">
				<p>-</p>
			</div>
			<div class="border-end col-2">
				<p>${formatMoney($sumTotalValue)}</p>
			</div>
			<div class="border-end col-2">
				<p>{$sumPlayerCount}</p>
			</div>
			<div class="col-2">
				<p>${formatMoney($sumPlayerValue)}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.table-footer p {
		text-align: center;
	}
</style>
