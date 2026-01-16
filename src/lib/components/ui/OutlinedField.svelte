<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	export let label: string;
	export let type: HTMLInputAttributes['type'] = 'text';
	export let name: string;
	export let value: string = '';
	export let autocomplete: HTMLInputAttributes['autocomplete'] = undefined;
	export let required = false;
</script>

<fieldset class="field">
	<legend>{label}</legend>
	<input {name} {type} bind:value {autocomplete} {required} />
</fieldset>

<style>
	.field {
		border: 1px solid var(--field-border);
		border-radius: 6px;
		padding: 10px 10px 8px;
		margin: 0;
	}
	legend {
		padding: 0 8px;
		color: var(--label);
		font-size: 12px;
	}
	input {
		width: 100%;
		border: 0;
		outline: none;
		font-size: 14px;
		color: var(--text);
		background: transparent;
	}
</style>
