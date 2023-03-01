<script>
	import { redChip, greenChip, blackChip } from '../store'
	import ChipRow from './ChipRow.svelte'

	const gridSize = [2, 2, 2, 2, 2, 2]
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
			<ChipRow chipRowData={redChip} />
		</div>
		<div class="table-footer border-top row">
			<div class="border-end col-2">
				<p>Total</p>
			</div>
			<div class="border-end col-2">
				<p>SUM OF COUNT</p>
			</div>
			<div class="border-end col-2">
				<p>-</p>
			</div>
			<div class="border-end col-2">
				<p>SUM OF TOTAL COUNT</p>
			</div>
			<div class="border-end col-2">
				<p>SUM OF PLAYER COUNT</p>
			</div>
			<div class="col-2">
				<p>SUM OF PLAYER VALUE</p>
			</div>
		</div>
	</div>
</section>

<style>
</style>
