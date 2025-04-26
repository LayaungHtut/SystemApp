import { resetPassword } from '$lib/server/auth';
import { json } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const { token, password } = await request.json();

    try {
      await resetPassword(token, password);
      return json({ success: true });
    } catch (error) {
      console.error(error);
      return json({ success: false });
    }
  }
};
