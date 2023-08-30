<script lang="ts">
	import PokemonCard from './PokemonCard.svelte';
	import { pokemon, price, cart, creditAvailable } from '$lib';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navbar from './Navbar.svelte';

	onMount(() => {
		if($pokemon.length > 0)
			return
		fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
		.then(x => x.json())
		.then(async (x:PokemonList) => {
			pokemon.set(x.results)
		})
	})

	function buy(pokemon:PokemonResource) {
		return async () => {
			cart.update(x => {
				x.push(pokemon)
				return x
			})
			await goto('/cart')
		}
	}

	let search = ""
	$: pokemonFiltered = $pokemon.filter(p => p.name.includes(search.toLowerCase())).slice(0, 10)
</script>

<Navbar />
<div class="container">
	<div>
		Search: <input type="text" bind:value={search} />
	</div>
	<div class="row">
		{#each pokemonFiltered as poke (poke.name)}
			<PokemonCard resource={poke} let:pokemon>
				<button class="btn btn-primary float-end" disabled={pokemon.price > $creditAvailable} on:click={buy(poke)}>Buy</button>
			</PokemonCard>
		{:else}
			Nothing to show.
		{/each}
	</div>
</div>
