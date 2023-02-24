<script>
	import RuleRow from './RuleRow.svelte'
</script>

<section>
	<div class="subheader">
		<h2>Game Rules</h2>
	</div>

	<RuleRow id="players" title="Players" isMoney={false} />
	<RuleRow id="buy-in" title="Buy In ($)" isMoney={true} />
	<RuleRow id="small-blind" title="Small Blind ($)" isMoney={true} />
	<RuleRow id="big-blind" title="Big Blind ($)" isMoney={true} />
	<RuleRow id="buy-in-over-bb-min" title="Buy-In/BB min" isMoney={false} />
	<RuleRow id="buy-in-over-bb-max" title="Buy-In/BB max" isMoney={false} />
</section>

<style>
	.subheader {
		margin: 0 0 1rem 0;
	}

	section {
		position: absolute;
		padding: 1rem;
		top: var(--header-height);
		left: 0;
		width: var(--game-rules-width);
		height: var(--content-height);
		border-right: 1px solid var(--border-color);
	}

	@media (max-width: 768px) {
		section {
			width: 100%;
			height: 10rem;
			border-right: none;
			border-bottom: 1px solid var(--border-color);
		}
	}
</style>
