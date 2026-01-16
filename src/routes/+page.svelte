<!-- <script lang="ts">
  import { goto } from "$app/navigation";

  function goToContacts() {
    goto("/contacts");
  }
</script>

<h1>Home</h1>

<button type="button" on:click={goToContacts}> Go to Contacts </button>
 -->

<!-- <script lang="ts">
  import { goto } from "$app/navigation";
  import { testRequest } from "$lib/auth/auth";
  import { userInput, userPassword } from "$lib/stores/userInput";

  function goToContacts() {
    goto("/contacts");
  }

  function handleChange(event: Event, type: "input" | "password") {
    const target = event.target as HTMLInputElement;
    if (type === "input") {
      $userInput = target.value;
    } else if (type === "password") {
      $userPassword = target.value;
    }
  }
</script>

<h1>Home</h1>
<button type="button" on:click={testRequest}> Test API request </button>

<button type="button" on:click={goToContacts}> Go to Contacts </button>

<br />
<br />
<br />
<input
  type="text"
  bind:value={$userInput}
  placeholder="Type something..."
  on:change={(e) => handleChange(e, "input")}
/>
<input
  type="password"
  bind:value={$userPassword}
  placeholder="Type password..."
  on:change={(e) => handleChange(e, "password")}
/>
 -->

<script>
  import LoginCard from "$lib/components/LoginCard.svelte";
</script>

<LoginCard form={null} />
