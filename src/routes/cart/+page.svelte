<script lang="ts">
	import PokemonCard from "../PokemonCard.svelte";
	import { credit, cart, price } from "$lib";
	import { goto } from "$app/navigation";
	import Navbar from "../Navbar.svelte";

	function remove(i:number) {
		return () => {
			
			let p = price($cart[i])
			credit.update(x => x+p)

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
	{#each $cart as pokemon,i}
		<PokemonCard {pokemon}>
			<button class="btn btn-secondary" on:click={remove(i)}>Remove</button>
		</PokemonCard>
	{/each}
	</div>
</div>
