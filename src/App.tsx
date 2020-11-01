import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { Grid } from "@material-ui/core";
import { ProductGallery } from "./components/ProductGallery";
import productData from "./shopData.json";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import themes from "./themes";
import { ThemeProvider } from "styled-components";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  const [isDark, setIsDark] = React.useState(true);
  const theme = isDark ? themes.darkTheme : themes.lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Layout>
          <ThemeToggle setIsDark={setIsDark} />
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
