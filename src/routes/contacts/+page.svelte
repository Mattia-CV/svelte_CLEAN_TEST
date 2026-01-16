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

{#if $todo?.user.projects?.length}
  <ul>
    {#each $todo.user.projects as item}
      <li>
        {item.project.display}
      </li>
    {/each}
  </ul>
{:else}
  <p>No projects found.</p>
{/if}
<br />
<label for="inputField">Total companies: {$todo?.user.companies.length}</label>

{#if $todo?.user.companies?.length}
  <ul>
    {#each $todo.user.companies as item}
      <li>
        {item.company.display}
      </li>
    {/each}
  </ul>
{:else}
  <p>No companies found.</p>
{/if}
<br />
<label for="inputField">Total groups: {$todo?.user.groups.length}</label>

{#if $todo?.user.groups?.length}
  <ul>
    {#each $todo.user.groups as item}
      <li>
        {item.group.display}
      </li>
    {/each}
  </ul>
{:else}
  <p>No groups found.</p>
{/if}
<br />
<label for="inputField"
  >Total supervised users: {$todo?.user.supervisedUsers.length}</label
>

{#if $todo?.user.supervisedUsers?.length}
  <ul>
    {#each $todo.user.supervisedUsers as item}
      <li>
        {item.user.display}
      </li>
    {/each}
  </ul>
{:else}
  <p>No supervised users found.</p>
{/if}
<br />
<label for="inputField"
  >Total supervisors: {$todo?.user.supervisors.length}</label
>

{#if $todo?.user.supervisors?.length}
  <ul>
    {#each $todo.user.supervisors as item}
      <li>
        {item}
      </li>
    {/each}
  </ul>
{:else}
  <p>No supervisors found.</p>
{/if}
