<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";
  import { userInput, userPassword } from "../stores/userInput";
  import OutlinedField from "./ui/OutlinedField.svelte";
  import Snackbar from "./ui/Snackbar.svelte";
  import { testRequest } from "$lib/auth/auth";

  export let form: { error?: string; email?: string } | null | undefined;

  let snack: string | null = null;

  $: if (form?.error) {
    snack = form.error;
    setTimeout(() => (snack = null), 2500);
  }

  const onSubmit: SubmitFunction = () => {
    testRequest();
  };
</script>

<div class="screen">
  <div class="card">
    <div class="divider-title"><span>Form login</span></div>

    <form method="POST" action="?/login" use:enhance={onSubmit}>
      <div class="fields">
        <OutlinedField
          label="e-mail"
          name="email"
          type="email"
          bind:value={$userInput}
          autocomplete="email"
          required
        />
        <OutlinedField
          label="password"
          name="password"
          type="password"
          bind:value={$userPassword}
          autocomplete="current-password"
          required
        />
      </div>
      <button class="btn" type="submit">Login</button>
    </form>
  </div>

  <Snackbar message={snack} />
</div>

<style>
  .screen {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: radial-gradient(
      circle at 50% 45%,
      rgba(63, 116, 149, 0.75) 0%,
      rgba(2, 17, 64, 1) 48%,
      rgba(0, 0, 33, 1) 100%
    );
  }
  .card {
    width: 260px;
    background: white;
    border: 1px solid var(--card-border);
    padding: 18px 18px 22px;
  }
  .divider-title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 4px 0 14px;
  }
  .divider-title::before,
  .divider-title::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e6e6ef;
  }
  .divider-title span {
    color: #c7c7d8;
    font-size: 12px;
  }
  form {
    display: grid;
    gap: 14px;
  }
  .fields {
    display: grid;
    gap: 10px;
  }
  .btn {
    justify-self: center;
    padding: 10px 26px;
    border: 0;
    border-radius: 999px;
    background: var(--btn-bg);
    color: var(--btn-text);
    cursor: pointer;
    font-weight: 600;
    font-size: 13px;
  }
</style>
