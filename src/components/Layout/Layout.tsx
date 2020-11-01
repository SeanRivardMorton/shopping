import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding: 48px;
`;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StyledContainer maxWidth="lg">
        <>{children}</>
      </StyledContainer>
    </>
  );
};
