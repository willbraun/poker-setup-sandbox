<script>
	import { Accordion, AccordionHeader, AccordionItem } from 'sveltestrap'
	import RuleRow from './RuleRow.svelte'
</script>

<section>
	<!-- <div class="subheader">
		<h2>Game Rules</h2>
	</div> -->

	<Accordion flush>
		<AccordionItem active header="Game Rules">
			<RuleRow id="players" title="Players" isMoney={false} />
			<RuleRow id="buy-in" title="Buy In ($)" isMoney={true} />
			<RuleRow id="small-blind" title="Small Blind ($)" isMoney={true} />
			<RuleRow id="big-blind" title="Big Blind ($)" isMoney={true} />
			<RuleRow id="buy-in-over-bb-min" title="Buy-In/BB min" isMoney={false} />
			<RuleRow id="buy-in-over-bb-max" title="Buy-In/BB max" isMoney={false} />
		</AccordionItem>
	</Accordion>
</section>

<style>
	.subheader {
		margin: 0 0 1rem 0;
	}
</style>
