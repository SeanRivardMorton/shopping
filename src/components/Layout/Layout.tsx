import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  ${({ theme }) => `
    padding: ${theme.spacing(8)}px;
  `}
`;

const StyledPage = styled.div`
  ${({ theme }) => `
    height: 100vh;
    background-color: ${theme.palette.background.default}
  `}
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledPage>
      <StyledContainer>
        <>{children}</>
      </StyledContainer>
    </StyledPage>
  );
};
