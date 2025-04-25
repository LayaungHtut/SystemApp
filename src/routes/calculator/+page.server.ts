import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
    logout: async ({ cookies }) => {
            cookies.delete('session', { path: '/' }); 
            throw redirect(302, '/auth/lucia');
        }
}