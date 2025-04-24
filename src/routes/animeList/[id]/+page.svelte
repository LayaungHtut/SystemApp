<script lang="ts">
	let { data } = $props();

    let animeDetail = $derived(data?.animeDetail);
</script>


<div class="flex flex-wrap justify-center gap-6">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={`https://shikimori.one${animeDetail.image.original}`} alt={animeDetail.name} class="w-full h-full object-cover" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{animeDetail.name}</h2>
          <p><strong>Type:</strong> {animeDetail.kind}</p>
          <p><strong>Russian:</strong> {animeDetail.russian}</p>
          <p><strong>Status:</strong> {animeDetail.status}</p>
          <p><strong>Aired On:</strong> {animeDetail.aired_on}</p>
          <p><strong>Released On:</strong> {animeDetail.released_on}</p>
          <p><strong>Episodes:</strong> {animeDetail.episodes} (Aired: {animeDetail.episodes_aired})</p>
          <p><strong>Score:</strong> {animeDetail.score}</p>
          <div class="card-actions justify-end">
            <a href={animeDetail.url} class="btn btn-primary btn-sm">View More</a>
          </div>
        </div>
      </div>
      
  </div>



  
  


  

