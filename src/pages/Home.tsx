import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
  useEffect(() => {
    document.title = "OnlyUwU";
  }, []);
  return (
    <div>
      <Navbar />
      <Grid
        gridTemplateColumns="22vw auto 24vw"
        columnGap="2rem"
        marginLeft="1rem"
        marginRight="1rem"
      >
        <RightSidebar />
        <p>Lma</p>
        <p>Lmaooo</p>
      </Grid>
    </div>
  );
};

export default Home;
