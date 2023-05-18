import RunningPikachu from "../../../assets/pikachu-running.gif";
import { StyledLoadingContainer } from "./Loading.style";

const Loading: React.FC = () => {
  return (
    <StyledLoadingContainer>
      <img src={RunningPikachu} alt="Loading" />
    </StyledLoadingContainer>
  );
};

export default Loading;
