import { StyledValueWrapper } from "./PokemonInformation.style";

interface IPokemonInformationProps {
  attribute: string;
  value: string;
}

const PokemonInformation: React.FC<IPokemonInformationProps> = ({
  attribute,
  value,
}) => {
  return (
    <div>
      {attribute}
      <StyledValueWrapper>{value}</StyledValueWrapper>
    </div>
  );
};

export default PokemonInformation;
