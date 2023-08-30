<script lang="ts">
	import PokemonCard from './PokemonCard.svelte';
	import { search, pokemonList, cart, creditAvailable } from '$lib';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		if($pokemonList.length > 0)
			return
		fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
		.then(x => x.json())
		.then((x:PokemonList) => pokemonList.set(x.results))
	})

	function buy(resource:PokemonResource) {
		return async () => {
			cart.update(x => x.concat(resource))
			await goto('/cart')
		}
	}

	$: results = $pokemonList.filter(p => p.name.includes($search.toLowerCase())).slice(0, 50)
</script>

<div>
	Search: <input type="text" bind:value={$search} />
</div>
<div class="row">
	{#if $pokemonList.length == 0}
		Loading pokemon list...
	{:else}
	{#each results as resource (resource.name)}
		<PokemonCard {resource} let:pokemon>
			<button class="btn btn-primary float-end" disabled={pokemon.price > $creditAvailable} on:click={buy(resource)}>Buy</button>
		</PokemonCard>
	{:else}
		Nothing to show.
	{/each}
	{/if}
</div>
