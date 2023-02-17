<script>
	let players
</script>

<section>
	<div class="subheader">
		<h2>Game Rules</h2>
	</div>

	<div class="rule row">
		<div class="label col-6">
			<label for="players">Players</label>
		</div>
		<div class="col-6">
			<input class="num-input" id="players" type="number" min="0" />
		</div>
	</div>
</section>

<style>
	section {
		position: absolute;
		top: var(--header-height);
		left: 0;
		width: var(--game-rules-width);
		height: var(--content-height);
		border-right: 1px solid var(--border-color);
	}

	.rule {
		width: 90%;
		margin: auto;
		display: flex;
	}

	label {
		display: flex;
		align-items: center;
		font-size: 1.3rem;
	}

	#players {
		width: 100%;
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
