<script lang="ts">
	import { price, statName } from "$lib";
	export let pokemon:Pokemon
</script>
<div class="card col-md-3 col-sm-12 mt-2 ms-2">
	<img src="{pokemon.sprites.front_default}" class="card-img-top" alt="">
	<div class="card-body">
		<h5 class="card-title text-center">{pokemon.name} <span class="fw-bold float-end">${pokemon.price}</span></h5>
		<table class="table">
			{#each pokemon.stats as stat}
				<tr>
					<td class="fw-bold">
					{#await statName(stat.stat, 'en')}
						{stat.stat.name}
					{:then name}
						{name}
					{/await}</td>
					<td class="text-end">{stat.base_stat}</td>
				</tr>
			{/each}
		</table>
		<slot />
	</div>
</div>

