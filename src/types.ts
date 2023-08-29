interface PokemonResource {
	name: string;
	url: string;
}
interface PokemonList {
	count: number;
	next: string|null;
	prev: string|null;
	results: PokemonResource[];
}

interface PokemonStatResource {
	name: string;
	url: string;
}

interface Pokemon {
	base_experience: number;
	height: number;
	weight: number;
	id: number;
	name: string;
	order: number;
	sprites: {
		back_default: string;
		back_shiny: string;
		front_default: string;
		front_shiny: string;
	};
	stats: {
		base_stat: number;
		effort: number;
		stat: PokemonStatResource;
	}[]
}

interface Translation {
	language: {
		name: string;
		url: string;
	};
	name: string;
}
