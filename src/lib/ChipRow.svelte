<script lang="ts">
	import { formatDecimal } from '../util'

	$: color = ''
	$: totalCount = 0
	$: chipValue = 0
	$: playerCount = 0
</script>

<div class="chip-row row">
	<div class="col-1">
		<p>Color picker</p>
	</div>
	<div class="border-end col-1">
		<p>X</p>
	</div>
	<div class="border-end col-2">
		<input class="num-input" value={totalCount || ''} type="number" min="0" />
	</div>
	<div class="border-end col-2">
		<input
			class="num-input"
			value={chipValue || ''}
			type="number"
			min="0"
			on:change={e => {
				chipValue = Number(e.currentTarget.value)
			}}
		/>
	</div>
	<div class="border-end col-2">
		<p>${totalCount * chipValue}</p>
	</div>
	<div class="border-end col-2">
		<input class="num-input" value={playerCount || ''} type="number" min="0" />
	</div>
	<div class="border-end col-2">
		<p>${playerCount * chipValue}</p>
	</div>
</div>

<style>
	.num-input {
		width: 100%;
		/* max-width: 5rem; */
		text-align: center;
	}
</style>
