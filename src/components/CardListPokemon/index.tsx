import * as S from "./styles";

export type CardListPokemonProps = {
  name: string;
  id: number;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  sprites: string;
};

export function CardListPokemon(props: CardListPokemonProps) {
  return (
    <S.Container>
      <S.ImagePokemon>
        <img src={props.sprites} alt="Nome Pokemon" />
      </S.ImagePokemon>
      <S.NumberPokemon>Nº{props.id}</S.NumberPokemon>
      <S.NamePokemon>{props.name}</S.NamePokemon>
      <S.GroupTypes>
        {props.types.map((type: any) => (
          <S.TypePokemon key={type.name} colorBackground={type.name}>
            {type.name.toUpperCase()}
          </S.TypePokemon>
        ))}
      </S.GroupTypes>
    </S.Container>
  );
}
