<script lang="ts">
	// This is the PokemonCard component, it receives a pokemon resource
	// and it will lazy-load the full Pokemon data and display it.
	import { fetchPokemon, statName } from "$lib";
	export let resource:PokemonResource
	let promise:Promise<Pokemon> = fetchPokemon(resource)
</script>

<style>
	.img {
	  width: 150px;
		height: 150px;
	}
	.pokemon {
	  height: 420px;
	}
</style>
<div class="pokemon card col-md-3 col-sm-12 mt-2 ms-2">
{#await promise}
		<img src="" class="card-img-top img ms-auto me-auto" alt="">
		<div class="card-body">
			<h5 class="card-title text-center">{resource.name} <span class="fw-bold float-end">$?</span></h5>
		</div>
{:then pokemon}
		<img src="{pokemon.sprites.front_default}" class="card-img-top img ms-auto me-auto" alt="">
		<div class="card-body">
			<h5 class="card-title text-center">{pokemon.name} <span class="fw-bold float-end">${pokemon.price}</span></h5>
			<table class="table">
				{#each pokemon.stats as stat}
					<tr>
						<td class="fw-bold">
						{#await statName(stat.stat, 'en')}
							{stat.stat.name}
						{:then name}
							{name}
						{/await}</td>
						<td class="text-end">{stat.base_stat}</td>
					</tr>
				{/each}
			</table>
			<slot pokemon={pokemon}/>
		</div>
{/await}
</div>
