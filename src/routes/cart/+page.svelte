<script lang="ts">
	// This is the pokemon cart view, satisfies a checkbox of task3
	import PokemonCard from "../PokemonCard.svelte";
	import { cart } from "$lib";
	import { goto } from "$app/navigation";

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

<div class="row">
{#each $cart as resource,i}
	<PokemonCard {resource}>
			<!-- This button will remove the pokemon from the cart
				this satisfies a checbox of task3 -->
		<button class="btn btn-secondary" on:click={remove(i)}>Remove</button>
	</PokemonCard>
{/each}
</div>
