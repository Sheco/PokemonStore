<script lang="ts">
	// This component contains the code for task 1
	import PokemonCard from './PokemonCard.svelte';
	import { search, pokemonList, cart, creditAvailable } from '$lib';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// Load the list of pokemon only once and save them into a store
	// this component satisfies the first subtask of task 1
	onMount(() => {
		if($pokemonList.length > 0)
			return
		fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
		.then(x => x.json())
		.then((x:PokemonList) => pokemonList.set(x.results))
	})

	// Update the cart adding a pokemon to it and redirect
	// this satisfies a checkbox of task3
	function buy(resource:PokemonResource) {
		return async () => {
			cart.update(x => x.concat(resource))
			await goto('/cart')
		}
	}

	// results is a reactive variable containing the filtered list of pokemon
	$: results = $pokemonList.filter(p => p.name.includes($search.toLowerCase())).slice(0, 50)
</script>

<div>
	<!-- This search field satisfies task6, along with the reactive results variable -->
	Search: <input type="text" bind:value={$search} />
</div>
<div class="row">
	<!-- when the pokemon list is empty, show a loading message,
	this satisfies the second subtask of task 1 -->
	{#if $pokemonList.length == 0}
		Loading pokemon list...
	{:else}
	{#each results as resource (resource.name)}
		<PokemonCard {resource} let:pokemon>
			<!-- 
				Show a buy button but it will only be available when the user has enough credit
				this satisfies a checkbox of task3
				-->
			<button class="btn btn-primary float-end" disabled={pokemon.price > $creditAvailable} on:click={buy(resource)}>Buy</button>
		</PokemonCard>
	{:else}
		Nothing to show.
	{/each}
	{/if}
</div>
