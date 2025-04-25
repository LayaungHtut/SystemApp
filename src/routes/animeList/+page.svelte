<script lang="ts">
	import { goto } from '$app/navigation';

	let { data } = $props();
	let anime = $derived(data?.anime);
	let search = $state(data.query ?? '');

	const { page, totalPages } = data;
	const prevPage = page > 1 ? page - 1 : 1;
	const nextPage = page < totalPages ? page + 1 : totalPages;

	function handleSearch(event: Event) {
		event.preventDefault();
		goto(`?page=1&q=${encodeURIComponent(search)}`);
	}
</script>

<form onsubmit={handleSearch} class="mb-6 flex justify-center">
	<input
		class="input input-bordered w-full max-w-xs"
		type="text"
		placeholder="Search anime..."
		bind:value={search}
	/>
	<button class="btn ml-2" type="submit">Search</button>
</form>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each anime as { id, name, image, kind, episodes, episodes_aired, score }}
		<a href={`/animeList/${id}`} class="block">
			<div class="overflow-hidden rounded-lg bg-white shadow-lg">
				<img
					src={`https://shikimori.one${image.original}`}
					alt={name}
					class="h-64 w-full object-cover"
				/>
				<div class="p-4">
					<h2 class="text-xl font-semibold text-gray-800">{name}</h2>
					<p class="text-sm text-gray-600">{kind}</p>
					<div class="mt-2 flex items-center justify-between">
						<span class="text-xs text-gray-500">Episodes: {episodes_aired}/{episodes}</span>
						<span class="font-semibold text-yellow-500">{score}</span>
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>

<div class="join mt-8 flex justify-center">
	<button
		onclick={() => goto(`?page=${prevPage}&q=${encodeURIComponent(search)}`)}
		class="join-item btn">«</button
	>
	<button class="join-item btn">Page {page}</button>
	<button
		onclick={() => goto(`?page=${nextPage}&q=${encodeURIComponent(search)}`)}
		class="join-item btn">»</button
	>
</div>
