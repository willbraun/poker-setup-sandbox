<script lang="ts">
	import type { StoreNumber } from '../store'
	import NumInput from './NumInput.svelte'
	export let id: string, title: string, format: Function, storedValue: StoreNumber
</script>

<div class="rule row">
	<div class="label col-9">
		<label for={id}>{title}</label>
	</div>
	<div class="px-0 col-3">
		<NumInput {id} {format} bind:value={$storedValue} />
	</div>
</div>

<style>
	.rule {
		width: 100%;
		margin: 0 auto 1rem;
		display: flex;
		align-items: center;
	}

	label {
		display: flex;
		font-size: 1.1rem;
	}
</style>
