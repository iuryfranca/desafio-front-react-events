import { useState } from "react";
import { Header } from "./components/Header";
import { ListPokemon } from "./components/ListPokemon";
import { ModalDetails } from "./components/ModalDetails";
import { GlobalStyle } from "./styles/global";
import { IModalDetails } from "./components/ModalDetails";

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState<IModalDetails>();
  const description =
    "it swims as fast as a jet bat. The edges of its wings are sharp and can slice apart drifting ice.";

  console.log(modalOpen, !!pokemonData);

  return (
    <>
      {modalOpen && (
        <ModalDetails
          key={pokemonData?.id}
          id={pokemonData?.id || 1}
          name={pokemonData?.name || "1"}
          subName="ta faltando"
          pokedex="POKÉDEX ENTRY"
          description={description}
          types={pokemonData?.types}
          sprites={pokemonData?.sprites || "1"}
          setOpenModal={setModalOpen}
        />
      )}
      <Header />
      <ListPokemon
        onChange={(option: any) => setModalOpen(option)}
        dataPokemonCardDetails={(data: any) => setPokemonData(data)}
      />
      <GlobalStyle />
    </>
  );
}
