import { writable } from "svelte/store";

export const userInput = writable<string>("");
export const userPassword = writable<string>("");
