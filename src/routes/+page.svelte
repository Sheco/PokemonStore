<script lang="ts">
	import PokemonCard from './PokemonCard.svelte';
	let pokemon:Pokemon[] = []
	import { credit, price, cart } from '$lib';
	import { goto } from '$app/navigation';

	fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
	.then(x => x.json())
	.then(async (x:PokemonList) => {
	  pokemon = await Promise.all(x.results.map(
				(poke) => fetch(poke.url).then(x => x.json())
		));
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

</script>

<div class="container">
	Available credit: <span class="fw-bold">${$credit}</span>
	<a href="/cart">View cart</a>
	<div class="row">
		{#each pokemon as poke}
			<PokemonCard pokemon={poke}>
				<button class="btn btn-primary float-end" on:click={buy(poke)}>Buy</button>
			</PokemonCard>
		{:else}
			Loading...
		{/each}
	</div>
</div>
