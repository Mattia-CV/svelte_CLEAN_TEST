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

<br />
<br />

<label for="inputField">Email: {$todo?.user.email}</label>
<br />
<label for="inputField">Full name: {$todo?.user.fullName}</label>
<br />
<label for="inputField">Total projects: {$todo?.user.projects.length}</label>

<!-- <ul>
  {#each todo.user.projects as project (project.id)}
    <li>{project.display}</li>
  {/each}
</ul> -->
