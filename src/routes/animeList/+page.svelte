<script lang="ts">
	let { data } = $props();
	let anime = $derived(data?.anime);
	const { page, totalPages } = data;

	const prevPage = page > 1 ? page - 1 : 1;
	const nextPage = page < totalPages ? page + 1 : totalPages;
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
	{#each anime as {id, name, image, kind, episodes, episodes_aired, score}}
	<a href={`/animeList/${id}`} class="block">
		<div class="bg-white rounded-lg shadow-lg overflow-hidden">
			<img src={`https://shikimori.one${image.original}`} alt={name} class="w-full h-64 object-cover" />
			<div class="p-4">
				<h2 class="text-xl font-semibold text-gray-800">{name}</h2>
				<p class="text-gray-600 text-sm">{kind}</p>
				<div class="flex items-center justify-between mt-2">
					<span class="text-gray-500 text-xs">Episodes: {episodes_aired}/{episodes}</span>
					<span class="text-yellow-500 font-semibold">{score}</span>
				</div>
			</div>
		</div>
	</a>
	{/each}
</div>

<div class="join mt-8 flex justify-center">
	<a href="?page={prevPage}" class="join-item btn" aria-disabled={page === 1}>«</a>
	<button class="join-item btn" disabled>Page {page}</button>
	<a href="?page={nextPage}" class="join-item btn" aria-disabled={page === totalPages}>»</a>
</div>
