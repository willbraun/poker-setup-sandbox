<script>
	import { formatDecimal, formatInteger } from '../util'
	import NumInput from './NumInput.svelte'
	import RuleRow from './RuleRow.svelte'
</script>

<section>
	<div class="subheader">
		<h2>Game Rules</h2>
	</div>

	<RuleRow id="players" title="Players" format={formatInteger} />
	<RuleRow id="buy-in" title="Buy In ($)" format={formatDecimal} />
	<RuleRow id="small-blind" title="Small Blind ($)" format={formatDecimal} />
	<RuleRow id="big-blind" title="Big Blind ($)" format={formatDecimal} />
	<RuleRow id="buy-in-over-bb-min" title="Buy-In/BB min" format={String} />
	<RuleRow id="buy-in-over-bb-max" title="Buy-In/BB max" format={String} />
</section>

<style>
	/* .subheader {
		margin: 0 0 1rem 0;
	} */
</style>
