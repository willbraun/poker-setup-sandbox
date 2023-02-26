<script lang="ts">
	import NumInput from './NumInput.svelte'
	import { createEventDispatcher } from 'svelte'
	export let id: string, title: string, format: Function

	let value = 0
</script>

<div class="rule row">
	<div class="label col-9">
		<label for={id}>{title}</label>
	</div>
	<div class="px-0 ml-auto col-3">
		<NumInput {format} />
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
