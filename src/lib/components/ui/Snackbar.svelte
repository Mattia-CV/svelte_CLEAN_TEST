<script lang="ts">
	export let message: string | null = null;
</script>

{#if message}
	<div class="snack" role="status" aria-live="polite">{message}</div>
{/if}

<style>
	.snack {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 10px 16px;
		background: var(--snack-bg);
		color: var(--snack-text);
		font-size: 13px;
	}
</style>
