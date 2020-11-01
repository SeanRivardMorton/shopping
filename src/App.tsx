import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { Grid } from "@material-ui/core";
import { ProductGallery } from "./components/ProductGallery";
import productData from "./shopData.json";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { ThemeToggle } from "./components/ThemeToggle";
import { createMuiTheme } from "@material-ui/core/styles";

function App() {
  const [isDark, setIsDark] = React.useState(true);
  const theme = createMuiTheme({
    palette: {
      type: isDark ? "dark" : "light",
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        <Layout>
          <Grid container spacing={3}>
            <Grid item lg={7} xs={12}>
              <ProductGallery products={productData} />
            </Grid>
            <Grid item lg={5} xs={12}>
              <div>basket</div>
            </Grid>
          </Grid>
        </Layout>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
