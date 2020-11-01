import React from "react";
import styled from "styled-components";
import { Switch, FormControlLabel, FormGroup } from "@material-ui/core";

const ToggleFormGroup = styled(FormGroup)`
  ${({ theme }) => `
        margin-left: ${theme.spacing(3)}px;
        color: ${theme.palette.text.primary};
        position: fixed;
    `}
`;

export const ThemeToggle = ({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: any;
}): React.ReactElement => {
  return (
    <ToggleFormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={isDark}
            onChange={() =>
              setIsDark((isDark: boolean) => {
                return !isDark;
              })
            }
            name="isDark"
            color="primary"
          />
        }
        label="Toggle Theme"
      />
    </ToggleFormGroup>
  );
};
