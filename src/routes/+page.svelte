<script lang="ts">
	import PokemonCard from './PokemonCard.svelte';
	import { pokemon, price, cart, creditAvailable } from '$lib';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navbar from './Navbar.svelte';
	import Page from './cart/+page.svelte';

	let loading = true;
	onMount(() => {
		if($pokemon.length > 0)
			return
		loading = true
		fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
		.then(x => x.json())
		.then(async (x:PokemonList) => {
			pokemon.set(await Promise.all(x.results.map(
					async (poke) => {
						let data:Pokemon = await fetch(poke.url).then(x => x.json())
						data.price = price(data)
						return data
					}
			)));
			loading = false;
		})
	})

	function buy(pokemon:Pokemon) {
		return async () => {
			if (pokemon.price > $creditAvailable) {
				alert('Not enough credit')
				return
			}
			cart.update(x => {
				x.push(pokemon)
				return x
			})
			await goto('/cart')
		}
	}

	let search = ""
	$: pokemonFiltered = $pokemon.filter(p => p.name.includes(search.toLowerCase())).slice(0, 20)
</script>

<Navbar />
<div class="container">
	<div>
		Search: <input type="text" bind:value={search} />
	</div>
	{#if loading}
		Loading...
	{:else}
		<div class="row">
			{#each pokemonFiltered as poke}
				<PokemonCard pokemon={poke}>
					<button class="btn btn-primary float-end" disabled={poke.price > $creditAvailable} on:click={buy(poke)}>Buy</button>
				</PokemonCard>
			{:else}
				Nothing to show.
			{/each}
		</div>
	{/if}
</div>
