<script lang="ts">
	
	import '../style.css';
	import ProfileCard from './profileCard/+page.svelte';


	import type { PageServerData } from './auth/lucia/$types';

	/* let { data } = $props<{
		notes: Array<{ id: number; title: string; content: string }>;
		user: { id: number; username: string };
	}>(); */

	let { data }: { data: PageServerData } = $props();
</script>

<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</div>
			<ul
				tabindex="-1"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
			>
				<li><a href="/">Homepage</a></li>
				<li><a href="/calculator">Calculator</a></li>
				<li><a href="/calander">Calendar</a></li>
				<li><a href="/animeList">Anime List</a></li>
				<li><a href="/notepad">Note Pad</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost text-xl">System App</a>
	</div>
	<div class="navbar-end">
		

		<div>
			<!-- Sign In / Sign Out -->
			{#if data.user}
				<div class="drawer drawer-end">
					<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
					<div class="drawer-content">
						<label for="my-drawer-4">
							<img
								class="w-10 rounded-full"
								alt="User avatar"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</label>
					</div>
					<div class="drawer-side">
						<label for="my-drawer-4" class="drawer-overlay"></label>
						<ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
							<ProfileCard data={data} />
						</ul>
					</div>
				</div>
			{:else}
				<a href="/auth/lucia/login" class="btn btn-primary">Sign In</a>
			{/if}
		</div>
	</div>
</div>

<slot />

<footer class="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
	<aside>
		<p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
	</aside>
</footer>
