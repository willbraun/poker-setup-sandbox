<script lang="ts">
	import { formatDecimal } from '../util'

	$: value = 0

	export let id: string, title: string, isMoney: boolean
</script>

<div class="rule row">
	<div class="label px-0 col-8">
		<label for={id}>{title}</label>
	</div>
	<div class="px-0 col-4">
		<input
			class="num-input"
			value={value || ''}
			{id}
			type="number"
			min="0"
			on:change={e => {
				if (isMoney) value = formatDecimal(e.currentTarget.value)
			}}
		/>
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

	.num-input {
		width: 100%;
		text-align: center;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
