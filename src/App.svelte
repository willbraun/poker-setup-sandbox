<script lang="ts">
	import Header from './lib/Header.svelte'
	import GameRules from './lib/GameRules.svelte'
	import Chips from './lib/Chips.svelte'
	import Checklist from './lib/Checklist.svelte'

	$: data = {
		rules: {
			players: 0,
			buyin: 0,
			smallBlind: 0,
			bigBlind: 0,
			buyinOverBBMin: 0,
			buyinOverBBMax: 0,
		},
		chips: [
			{
				// color, total count, chip value, player count
			},
		],
	}

	// Once data is figured out, add updateData function, pass down to GameRules, RuleRow, Chips, ChipRow, etc
	// Try to do this without prop drilling, just imports if possible
</script>

<div>
	<Header />
	<main>
		<div class="row">
			<div class="col-xs-12 col-md-3">
				<GameRules />
			</div>
			<div class="col-xs-12 col-md-6">
				<Chips />
			</div>
			<div class="col-xs-12 col-md-3">
				<Checklist />
			</div>
		</div>
	</main>
</div>

<style>
	main {
		position: absolute;
		top: var(--header-height);
		width: 100%;
	}
</style>
