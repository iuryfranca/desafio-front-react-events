import { Header } from "./components/Header";
import { ListPokemon } from "./components/ListPokemon";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <ListPokemon />
      <GlobalStyle />
    </>
  );
}
