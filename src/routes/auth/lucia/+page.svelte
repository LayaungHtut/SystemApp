<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<!-- name of each tab group should be unique -->
<div class="tabs tabs-box">
	<input type="radio" name="my_tabs_6" class="tab" aria-label="Profile" checked />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		{#if data.user}

		<div class="flex w-full flex-col lg:flex-row">
			<div class="card bg-base-300 rounded-box grid h-75 grow place-items-center">
				<div class="user-info">
					<div class="user-meta">
						<img
							src="https://i.pinimg.com/736x/70/17/40/7017409c5fef4a12b5ac81af0a52de10.jpg"
							alt="ff"
						/>
						<span class="label">Logged in as</span>
	
						<span class="username">{data.user.username}</span>
						<span>{data.user.email}</span>
						<span class="user-id">#{data.user.id}</span>
					</div>
					<form method="post" action="?/logout">
						<button class="signout-button btn btn-ghost btn-error" title="Sign out">Sign Out</button>
					</form>
					
				</div>
			</div>
			<div class="divider lg:divider-horizontal"></div>

			<div class="card bg-base-300 rounded-box grid h-75 grow place-items-center">



				<div class="flex w-full flex-col lg:flex-row">
					<div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">
						<fieldset class="fieldset border-base-300 p-4">
							<legend class="label">Theme</legend>
							<label class="flex cursor-pointer items-center gap-2">
								<input
									type="radio"
									name="theme-radios"
									class="radio radio-sm theme-controller"
									value="default"
									checked
								/>
								Default
							</label>
							<label class="flex cursor-pointer items-center gap-2">
								<input
									type="radio"
									name="theme-radios"
									class="radio radio-sm theme-controller"
									value="retro"
								/>
								Retro
							</label>
							<label class="flex cursor-pointer items-center gap-2">
								<input
									type="radio"
									name="theme-radios"
									class="radio radio-sm theme-controller"
									value="cyberpunk"
								/>
								Cyberpunk
							</label>
							<label class="flex cursor-pointer items-center gap-2">
								<input
									type="radio"
									name="theme-radios"
									class="radio radio-sm theme-controller"
									value="valentine"
								/>
								Valentine
							</label>
							<label class="flex cursor-pointer items-center gap-2">
								<input
									type="radio"
									name="theme-radios"
									class="radio radio-sm theme-controller"
									value="aqua"
								/>
								Aqua
							</label>
						</fieldset>
					</div>
					<div class="divider lg:divider-horizontal"></div>
					<div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">
						<select class="select select-ghost">
							<option disabled selected>Pick a font</option>
							<option>Inter</option>
							<option>Poppins</option>
							<option>Raleway</option>
						  </select>
					</div>
				  </div>


				
			</div>
		  </div>

			
		{:else}
			<p>User not found</p>
		{/if}
	</div>

	<input type="radio" name="my_tabs_6" class="tab" aria-label="Tab 2" />
	<div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

	<input type="radio" name="my_tabs_6" class="tab" aria-label="Tab 3" />
	<div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>

<style>
	.user-info {
		/* display: flex;
		align-items: center; */
		flex-direction: column;
		padding: 20px;
		border-radius: 8px;
		margin-bottom: 20px;
		height: 100vh;
	}

	.user-meta {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
		gap: 10px;
	}

	.user-meta img {
		width: 105px;
		height: 105px;
		border-radius: 50%;
	}

	.label {
		font-size: 14px;
		color: #555;
	}

	.username {
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}

	.user-id {
		font-size: 14px;
		color: #777;
	}

	.signout-button {
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>
