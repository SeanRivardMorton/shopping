import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const ThemeToggleButton = styled(Button)`
  /* position: fixed; */
`;

export const ThemeToggle = ({ setIsDark }: any): React.ReactElement => {
  return (
    <ThemeToggleButton
      color="primary"
      variant="contained"
      onClick={() => setIsDark((isDark: boolean) => !isDark)}
    >
      toggle theme
    </ThemeToggleButton>
  );
};
