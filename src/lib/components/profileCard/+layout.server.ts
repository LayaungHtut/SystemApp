import type { LayoutServerLoad } from "../../../routes/profileCard/$types";

export const load: LayoutServerLoad = async ({ locals }) => {
    return {
        user: locals.user ?? null
    };
};