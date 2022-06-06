import axios from "axios";
import { useEffect, useState } from "react";
import { pokemonData } from "../../services/pokemonData";
import { queryClient } from "../../services/queryClient";
import { CardListPokemon } from "../CardListPokemon";
import { ModalDetails } from "../ModalDetails";
import { SelectInput } from "../SelectInput";
import * as S from "./styles";

interface IListPokemon {
  onChange: (option: any) => void;
  dataPokemonCardDetails: (data: any) => void;
}

export function ListPokemon({
  onChange,
  dataPokemonCardDetails,
}: IListPokemon) {
  const { getPokemonSpecies, getPokemonSpeciesByPage } = pokemonData;

  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [inputType, setInputType] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const typesFilter = queryClient.getQueryData<any[]>("typesFilter") as any[];

  const pokemonListFormatted = pokemonList.map((pokemon: any) => {
    return {
      name: pokemon.name,
      id: pokemon.id,
      types: pokemon.types.map((type: any) => {
        return {
          name: type.type.name,
        };
      }),
      sprites: pokemon.sprites.front_default,
    };
  });

  const pokemonListFormattedFiltered = pokemonListFormatted?.filter(
    (pokemon) => {
      if (
        (searchTerm === null || searchTerm === "") &&
        (inputType === null || inputType === "")
      ) {
        return pokemon;
      } else {
        return (
          Object.values(
            Object.values(pokemon.types.map((item: any) => item.name))
          )
            .join("")
            .toLowerCase()
            .includes(inputType?.toLowerCase() as string) ||
          Object.values(pokemon.name)
            .join("")
            .toLowerCase()
            .includes(searchTerm?.toLowerCase() as string)
        );
      }
    }
  );

  const handleSearch = (searchInput: string) => {
    setSearchTerm(searchInput);
    console.log(searchInput);

    if (searchInput == "") {
      setSearchTerm(null);
    }
  };

  useEffect(() => {
    getPokemonSpecies().then(setPokemonList);
  }, []);

  return (
    <>
      <S.ContentContainer>
        <S.GroupSearch>
          <div style={{ display: "flex", alignItems: "center" }}>
            <S.SearchPokemon
              type="text"
              placeholder="Search your pokemon!"
              onChange={(event) => handleSearch(event.target.value)}
            />
            <S.ImgSearch src="/images/icon_bola.png" alt="search" />
          </div>
          <div>
            <SelectInput
              options={typesFilter}
              placeholder="Filter by type"
              onChange={(option: any) => setInputType(option)}
            />
          </div>
        </S.GroupSearch>
        <S.GroupList>
          {pokemonList &&
            pokemonListFormattedFiltered.map(({ sprites, id, ...rest }) => (
              <CardListPokemon
                onClick={() => {
                  setModalOpen(true);
                  onChange(modalOpen);
                  dataPokemonCardDetails({ sprites, id, ...rest });
                }}
                {...rest}
                key={id}
                id={id}
                sprites={sprites}
              />
            ))}
        </S.GroupList>
        <S.GroupButton>
          <S.ButtonMore
            onClick={async () =>
              setPokemonList(await getPokemonSpeciesByPage())
            }
          >
            Load more
          </S.ButtonMore>
        </S.GroupButton>
      </S.ContentContainer>
    </>
  );
}
