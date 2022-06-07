import ReactModal from "react-modal";
import * as S from "./styles";
import Modal from "react-modal";

export interface IModalDetails {
  setOpenModal: (option: any) => void;
  openModal: boolean;
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
export const ModalDetails: React.FC<IModalDetails> = (props) => {
  const customStyles = {
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "calc(380px + 40px)",
      height: "calc(480px + 40px)",
      margin: "0 auto",
      backgroundColor: "transparent",
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <>
      <Modal style={customStyles} isOpen={props.openModal}>
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
      </Modal>
    </>
  );
};
