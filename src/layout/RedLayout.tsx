import * as React from "react";
import {
  StyledChildrenContainer,
  StyledSidePageContainer,
  StyledTemplateListContainer,
  StyledTemplateListEdge,
} from "./RedLayout.style";
import SidePage from "../components/molecules/SidePage/SidePage";

const RedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledTemplateListContainer>
      <StyledSidePageContainer>
        <SidePage />
      </StyledSidePageContainer>
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
      <StyledTemplateListEdge />
    </StyledTemplateListContainer>
  );
};

export default RedLayout;
