<script lang="ts">
  import { goto } from "$app/navigation";
  import { userInput, userPassword } from "$lib/stores/userInput";
  import { todo } from "$lib/stores/todo";

  function goBack() {
    goto("/");
  }
</script>

<h1>Contacts</h1>

<button type="button" on:click={goBack}> Back </button>

<p>Input: {$userInput}</p>
<p>Password: {$userPassword}</p>

<br />
<br />

<label for="inputField">Email: {$todo?.user.email}</label>
