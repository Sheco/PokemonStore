// place files you want to import through the `$lib` alias in this folder.

import { derived, writable } from "svelte/store";

export let search = writable("")
export let pokemonList = writable([] as PokemonResource[])
export let credit = writable(250)
export let cart = writable([] as PokemonResource[])
export let cartTotal = derived(cart, ($cart) => $cart.reduce((total, pokemon) => total+pokemonCache[pokemon.name].price, 0))
export let creditAvailable = derived([cartTotal, credit], ([$t, $c]) => $c-$t)

let pokemonCache:{[key:string]: Pokemon} = {}

export async function fetchPokemon(pokemonResource:PokemonResource) {
	if(pokemonCache[pokemonResource.name])
		return pokemonCache[pokemonResource.name]
	
	let pokemon:Pokemon = await fetch(pokemonResource.url).then(x => x.json())
	pokemon.price = Math.round(pokemon.stats.reduce((total, stat) => total+stat.base_stat, 0)/pokemon.stats.length)

	pokemonCache[pokemonResource.name] = pokemon
	return pokemon

}

let stats:{[key:string]: string} = {}
export async function statName(stat:PokemonStatResource, lang:string) {
	let key = stat.name+lang
	if(stats[key]) return stats[key];
	let response = await fetch(stat.url).then(x => x.json())
	stats[key] = response.names.find((name:Translation) => name.language.name == lang).name
	return stats[key]
}
