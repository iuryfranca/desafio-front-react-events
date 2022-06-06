import axios from "axios";
import { queryClient } from "./queryClient";

export const pokemonData = {
  getPokemonSpecies: async () => {
    const response = await axios.get<any>(
      "https://pokeapi.co/api/v2/generation/1"
    );

    const slicedResponse = response.data.pokemon_species.slice(0, 20);
    const inicialResponse = response.data.pokemon_species.filter(
      (item: any) => {
        return !slicedResponse
          .map((item2: any) => item2.name)
          .includes(item.name);
      }
    );

    const fetchedPokemon = await Promise.all(
      slicedResponse.map(async (pokemon: any) => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        return response.data;
      })
    );

    const typesFilter = response.data.types.map(
      (item: any) => item
    ) as string[];

    queryClient.setQueryData("pokemonSpecies", inicialResponse);
    queryClient.setQueryData("fetchedPokemon", fetchedPokemon);
    queryClient.setQueryData("typesFilter", typesFilter);

    return fetchedPokemon as any[];
  },

  getPokemonSpeciesByPage: async () => {
    const pokemonSpecies = queryClient.getQueryData<any[]>(
      "pokemonSpecies"
    ) as any[];

    const cachedPokemon = queryClient.getQueryData<any[]>(
      "fetchedPokemon"
    ) as any[];

    const newLoadedPokemons = pokemonSpecies.slice(0, 20);
    const updatedPokemonSpecies = pokemonSpecies.filter((item: any) => {
      return !newLoadedPokemons
        .map((item2: any) => item2.name)
        .includes(item.name);
    });

    const fetchedPokemon = await Promise.all(
      newLoadedPokemons.map(async (pokemon) => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        return response.data;
      })
    );

    queryClient.setQueryData("pokemonSpecies", updatedPokemonSpecies);
    queryClient.setQueryData("fetchedPokemon", [
      ...cachedPokemon,
      ...fetchedPokemon,
    ]);

    return [...cachedPokemon, ...fetchedPokemon] as any[];
  },
};
