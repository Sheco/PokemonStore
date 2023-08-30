<script lang="ts">
	import PokemonCard from "../PokemonCard.svelte";
	import { cart } from "$lib";
	import { goto } from "$app/navigation";
	import Navbar from "../Navbar.svelte";

	function remove(i:number) {
		return () => {
			cart.update(x => {
				x.splice(i, 1)
				return x
			})
			goto('/')
		}
	}
</script>

<Navbar />
<div class="container">
	<div class="row">
	{#each $cart as resource,i}
		<PokemonCard {resource}>
			<button class="btn btn-secondary" on:click={remove(i)}>Remove</button>
		</PokemonCard>
	{/each}
	</div>
</div>
