import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { Grid } from "@material-ui/core";
import { ProductGallery } from "./components/ProductGallery";
import { Basket } from "./components/Basket";
import productData from "./shopData.json";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { ThemeToggle } from "./components/ThemeToggle";
import { createMuiTheme } from "@material-ui/core/styles";
import { useBasket } from "./hooks";

function App() {
  const [isDark, setIsDark] = React.useState(true);
  const [basket, dispatchBasket] = useBasket();
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
              <ProductGallery
                dispatchBasket={dispatchBasket}
                products={productData}
              />
            </Grid>
            <Grid item lg={5} xs={12}>
              <Basket basket={basket}></Basket>
            </Grid>
          </Grid>
        </Layout>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
