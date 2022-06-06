import { useState } from "react";
import * as S from "./styles";

export interface ISelectInput {
  options: {
    name: string;
    url: string;
  }[];
  onChange: (option: any) => void;
  placeholder?: string;
}

const SelectInput = (props: ISelectInput) => {
  const { options, placeholder, onChange } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownHandler = () => {
    if (selectedOption) {
      setSelectedOption("");
      onChange(null);
    }

    setShowDropdown(!showDropdown);
  };

  const selectPlaceholder = placeholder || "Choose an option";

  const updateSelectedOption = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <S.SelectContainer showDropdown={showDropdown}>
      <S.LabelWrapper onClick={showDropdownHandler}>
        <S.TextSelect>
          {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
        </S.TextSelect>
        {!selectedOption ? (
          <S.Icon showDropdown={showDropdown} src="/images/arrow-select.svg" />
        ) : (
          <S.Icon showDropdown={showDropdown} src="/images/close.svg" />
        )}
      </S.LabelWrapper>

      <S.ContainerOptions showDropdown={showDropdown}>
        {options?.map((option, index) => (
          <S.Option
            key={`${option.name}${index}`}
            value={`${option.name}`}
            onClick={() => {
              onChange(`${option.name}`);
              updateSelectedOption(option.name);
            }}
          >
            {option?.name}
          </S.Option>
        ))}
      </S.ContainerOptions>
    </S.SelectContainer>
  );
};

export { SelectInput };
