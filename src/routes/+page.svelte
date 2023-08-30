<script lang="ts">
	import PokemonCard from './PokemonCard.svelte';
	import { search, pokemonList, cart, creditAvailable } from '$lib';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navbar from './Navbar.svelte';

	onMount(() => {
		if($pokemonList.length > 0)
			return
		fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')
		.then(x => x.json())
		.then(async (x:PokemonList) => {
			pokemonList.set(x.results)
		})
	})

	function buy(resource:PokemonResource) {
		return async () => {
			cart.update(x => {
				x.push(resource)
				return x
			})
			await goto('/cart')
		}
	}

	$: results = $pokemonList.filter(p => p.name.includes($search.toLowerCase())).slice(0, 10)
</script>

<Navbar />
<div class="container">
	<div>
		Search: <input type="text" bind:value={$search} />
	</div>
	<div class="row">
		{#each results as resource (resource.name)}
			<PokemonCard {resource} let:pokemon>
				<button class="btn btn-primary float-end" disabled={pokemon.price > $creditAvailable} on:click={buy(resource)}>Buy</button>
			</PokemonCard>
		{:else}
			Nothing to show.
		{/each}
	</div>
</div>
