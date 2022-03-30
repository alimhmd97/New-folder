import { Grid } from "@mui/material";
import { Header } from "../components/header/header";
import { Items } from "../components/items/items";
import SideBar from "../components/sideBar/sideBar";

function Home() {
  return (
    <div>
      {" "}
      <Header />
      <Grid container spacing={0}>
        <Grid item md={3}>
          <SideBar />
        </Grid>

        <Grid item lg={9} xs={12} className={"Items_component"}>
          <Items />
        </Grid>
      </Grid>
    </div>
  );
}

export { Home };
