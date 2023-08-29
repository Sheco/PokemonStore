<script lang="ts">
	import PokemonCard from './PokemonCard.svelte';
	import { pokemon, credit, price, cart } from '$lib';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Navbar from './Navbar.svelte';

	onMount(() => {
		if($pokemon.length > 0)
			return
		fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
		.then(x => x.json())
		.then(async (x:PokemonList) => {
			pokemon.set(await Promise.all(x.results.map(
					(poke) => fetch(poke.url).then(x => x.json())
			)));
		})
	})

	function buy(pokemon:Pokemon) {
		return async () => {
			let p = price(pokemon)
			if (p > $credit) {
				alert('Not enough credit')
				return
			}
			credit.update(x => x-p)
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
	<div class="row">
		{#each pokemonFiltered as poke}
			<PokemonCard pokemon={poke}>
				<button class="btn btn-primary float-end" on:click={buy(poke)}>Buy</button>
			</PokemonCard>
		{:else}
			Loading...
		{/each}
	</div>
</div>
