<script>
	import RuleRow from './RuleRow.svelte'
	import { formatMoney, formatInteger } from '../util'
	import { players, buyIn, smallBlind, bigBlind, buyInOverBBMin, buyInOverBBMax } from './../store'
</script>

<section>
	<div class="subheader">
		<h2>Game Rules</h2>
	</div>

	<RuleRow id="players" title="Players" format={formatInteger} storedValue={players} />
	<RuleRow id="buy-in" title="Buy In ($)" format={formatMoney} storedValue={buyIn} />
	<RuleRow id="small-blind" title="Small Blind ($)" format={formatMoney} storedValue={smallBlind} />
	<RuleRow id="big-blind" title="Big Blind ($)" format={formatMoney} storedValue={bigBlind} />
	<RuleRow id="buy-in-over-bb-min" title="Buy-In/BB min" format={String} storedValue={buyInOverBBMin} />
	<RuleRow id="buy-in-over-bb-max" title="Buy-In/BB max" format={String} storedValue={buyInOverBBMax} />
</section>

<style>
</style>
