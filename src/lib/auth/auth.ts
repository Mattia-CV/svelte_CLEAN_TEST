import { userInput, userPassword } from "$lib/stores/userInput";
import { todo } from "$lib/stores/todo";
import { PROVIDER } from "./providers";
import { get } from "svelte/store";

export async function testRequest() {
  try {
    const res = await fetch(`${PROVIDER}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: get(userInput),
        password: get(userPassword),
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    //console.log("userInput", get(userInput));
    //console.log("userPassword", get(userPassword));
    todo.set(data);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}
