import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Chip } from "./chip";
import { Grid } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Grid
        container
        style={{ display: "flex", justifyContent: "space-between" }}>
        <Chip item lg={6} xs={12} text={"From "} value={value[0]} />{" "}
        <Chip item lg={6} xs={12} value={value[1]} text={"To "} />
      </Grid>
      <Slider
        sx={{ color: "hsl(359deg 74% 54%)" }}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
