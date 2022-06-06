import * as S from "./styles";

export interface IModalDetails {
  setOpenModal: (option: any) => void;
  name: string;
  subName: string;
  pokedex: string;
  description: string;
  id: number;
  types?: {
    type: {
      name: string;
    };
  }[];
  sprites: string;
}
export function ModalDetails(props: IModalDetails) {
  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <S.TitleCloseBtn>
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button>
        </S.TitleCloseBtn>
        <S.ImagePokemon>
          <img src={props.sprites} alt="Nome Pokemon" height={180} />
        </S.ImagePokemon>
        <S.NumberPokemon>Nº{props.id}</S.NumberPokemon>
        <S.NamePokemon>{props.name}</S.NamePokemon>
        <S.NumberPokemon>{props.subName}</S.NumberPokemon>
        <S.GroupTypes>
          {props.types?.map((type: any) => (
            <S.TypePokemon key={type.name} colorBackground={type.name}>
              {type.name.toUpperCase()}
            </S.TypePokemon>
          ))}
        </S.GroupTypes>
        <S.TypePokedex>{props.pokedex}</S.TypePokedex>
        <S.DescriptionPokemon>{props.description}</S.DescriptionPokemon>
      </S.ModalContainer>
    </S.ModalBackground>
  );
}
