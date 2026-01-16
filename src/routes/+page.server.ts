import type { Actions } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const actions: Actions = {
  login: async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return {
        error: "Email and password are required",
      };
    }

    // On success, redirect to contacts page
    throw redirect(303, "/contacts");
  },
};
