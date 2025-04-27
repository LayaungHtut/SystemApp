<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<!-- name of each tab group should be unique -->
<div class="tabs tabs-box">
	<!-- Tab - 1 -->

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
							<button class="signout-button btn btn-ghost btn-error" title="Sign out"
								>Sign Out</button
							>
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

	<!-- Tab - 2 -->

	<input type="radio" name="my_tabs_6" class="tab" aria-label="Othe stuffs" />
	<div class="tab-content bg-base-100 border-base-300 p-6">
		<div class="bg-base-100 border-base-300 collapse border">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				What is this even about?
			</div>
			<div
				class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				Here to listen "Yoru ni Kakeru" by YOASOBI <a
					class="link link-hover"
					href="https://youtu.be/x8VYWazR5mE?si=vJsrXMYHbyAwSjap"
					target="_blank">Click me</a
				>
			</div>
		</div>

		<div class="bg-base-100 border-base-300 collapse border">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				You bored?
			</div>
			<div
				class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				Here a little surprise for you <a
					class="link link-hover"
					href="https://youtu.be/bzLaL0SVwwI?si=dnvc3yd_Uy6j48EW"
					target="_blank">Click me</a
				>
			</div>
		</div>

		<div class="bg-base-100 border-base-300 collapse border">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				Another suprise?
			</div>
			<div
				class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				<div class="tooltip">
					<div class="tooltip-content">
						<div class="-rotate-10 animate-bounce text-2xl font-black text-orange-400">
							I love you!!
						</div>
					</div>
					<button class="btn">Hover me</button>
				</div>
			</div>
		</div>

		<div class="bg-base-100 border-base-300 collapse border">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				When will the world end?
			</div>
			<div
				class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
			>
				<div class="grid auto-cols-max grid-flow-col gap-5 text-center">
					<div class="flex flex-col">
						<span class="countdown font-mono text-5xl">
							<span style="--value:15;" aria-live="polite" aria-label="15">15</span>
						</span>
						days
					</div>
					<div class="flex flex-col">
						<span class="countdown font-mono text-5xl">
							<span style="--value:10;" aria-live="polite" aria-label="10">10</span>
						</span>
						hours
					</div>
					<div class="flex flex-col">
						<span class="countdown font-mono text-5xl">
							<span style="--value:24;" aria-live="polite" aria-label="24">24</span>
						</span>
						min
					</div>
					<div class="flex flex-col">
						<span class="countdown font-mono text-5xl">
							<span style="--value:59;" aria-live="polite" aria-label="59">59</span>
						</span>
						sec
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- 	<input type="radio" name="my_tabs_6" class="tab" aria-label="Tab 3" />
	<div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div> -->
</div>

<style>
	.user-info {
		flex-direction: column;
		padding: 20px;
		border-radius: 8px;
		margin-bottom: 20px;
		height: 100vh;
	}

	.user-meta {
		display: flex;
		flex-direction: column;

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
