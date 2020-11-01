import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";

const StyledContainer = styled(Container)`
  padding: 48px;
`;

const StyledPage = styled.div`
  ${({ theme }) => `
    height: 100vh;
    background-color: ${theme.palette.background.default}
  `}
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <StyledPage>
      <StyledContainer>
        <>{children}</>
      </StyledContainer>
    </StyledPage>
  );
};
