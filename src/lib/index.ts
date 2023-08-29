// place files you want to import through the `$lib` alias in this folder.

import { derived, writable } from "svelte/store";

export let pokemon = writable([] as Pokemon[])
export let credit = writable(250)
export let cart = writable([] as Pokemon[])
export let cartTotal = derived(cart, ($cart) => $cart.reduce((total, pokemon) => total+pokemon.price, 0))
export let creditAvailable = derived([cartTotal, credit], ([$t, $c]) => $c-$t)

export function price(poke:Pokemon) {
	return Math.round(poke.stats.reduce((total, stat) => total+stat.base_stat, 0)/poke.stats.length)
}

let stats:{[key:string]: string} = {}
export async function statName(stat:PokemonStatResource, lang:string) {
	let key = stat.name+lang
	if(stats[key]) return stats[key];
	let response = await fetch(stat.url).then(x => x.json())
	stats[key] = response.names.find((name:Translation) => name.language.name == lang).name
	return stats[key]
}
