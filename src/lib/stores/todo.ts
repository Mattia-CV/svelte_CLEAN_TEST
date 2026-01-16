import { writable } from "svelte/store";

export const todo = writable<any>(null); // keep it simple (no extra typing)
