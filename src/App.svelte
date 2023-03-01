<script lang="ts">
	import Header from './lib/Header.svelte'
	import GameRules from './lib/GameRules.svelte'
	import Chips from './lib/Chips.svelte'
	import Checklist from './lib/Checklist.svelte'
</script>

<div>
	<Header />
	<main>
		<div class="row">
			<div class="col-xs-12 col-md-3 col-xxl-2">
				<GameRules />
			</div>
			<div class="col-xs-12 col-md-6 col-xxl-8">
				<Chips />
			</div>
			<div class="col-xs-12 col-md-3 col-xxl-2">
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
