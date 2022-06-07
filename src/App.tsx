import { useState } from "react";
import { Header } from "./components/Header";
import { ListPokemon } from "./components/ListPokemon";
import { ModalDetails } from "./components/ModalDetails";
import { GlobalStyle } from "./styles/global";
import { IModalDetails } from "./components/ModalDetails";

import ReactModal from "react-modal";
ReactModal.setAppElement("*");

export function App() {
  const [pokemonCard, setPokemonCard] = useState({
    isOpen: false,
    pokemonData: {} as IModalDetails,
  });
  const description =
    "it swims as fast as a jet bat. The edges of its wings are sharp and can slice apart drifting ice.";

  return (
    <>
      <ModalDetails
        openModal={pokemonCard.isOpen}
        key={pokemonCard.pokemonData?.id}
        id={pokemonCard.pokemonData?.id}
        name={pokemonCard.pokemonData?.name}
        subName="Emperor Pokemon"
        pokedex="POKÉDEX ENTRY"
        description={description}
        types={pokemonCard.pokemonData?.types}
        sprites={pokemonCard.pokemonData?.sprites}
        setOpenModal={() =>
          pokemonCard.isOpen
            ? setPokemonCard({
                isOpen: false,
                pokemonData: {} as IModalDetails,
              })
            : setPokemonCard({
                isOpen: true,
                pokemonData: pokemonCard.pokemonData,
              })
        }
      />

      <Header />
      <ListPokemon
        onChange={(data: any) =>
          setPokemonCard({
            isOpen: !pokemonCard.isOpen,
            pokemonData: data,
          })
        }
      />
      <GlobalStyle />
    </>
  );
}
