import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  useEffect(() => {
    document.title = "OnlyUwU";
  }, []);
  return (
    <div>
      <Navbar />
      <Grid
        gridTemplateColumns="20vw auto 24vw"
        columnGap="2rem"
        marginLeft="1rem"
        marginRight="1rem"
      >
        <p>Loll</p>
        <p>Lma</p>
        <p>Lmaooo</p>
      </Grid>
    </div>
  );
};

export default Home;
