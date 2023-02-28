<script lang="ts">
	import NumInput from './NumInput.svelte'
	import type { Writable } from 'svelte/store'
	export let id: string, title: string, format: Function, storedValue: Writable<number>
</script>

<div class="rule row">
	<div class="label col-9">
		<label for={id}>{title}</label>
	</div>
	<div class="px-0 ml-auto col-3">
		<NumInput {format} {storedValue} />
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
