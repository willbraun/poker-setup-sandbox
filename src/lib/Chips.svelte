<section>
	<div class="subheader">
		<h2>Chips</h2>
	</div>
</section>

<style>
	section {
		position: absolute;
		top: var(--header-height);
		left: var(--game-rules-width);
		width: calc(100vw - var(--game-rules-width));
		height: var(--content-height);
	}

	@media (max-width: 768px) {
		section {
			width: 100%;
			left: 0;
			top: calc(var(--header-height) + var(--game-rules-height));
			height: calc();
		}
	}
</style>
