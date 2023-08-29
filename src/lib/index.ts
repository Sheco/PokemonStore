// place files you want to import through the `$lib` alias in this folder.

import { writable } from "svelte/store";

export let credit = writable(150)
export let cart = writable([] as Pokemon[])

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
