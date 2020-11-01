import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Layout>
        <Grid container spacing={3}>
          <Grid item lg={7} xs={12}>
            <div>products</div>
          </Grid>
          <Grid item lg={5} xs={12}>
            <div>basket</div>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default App;
