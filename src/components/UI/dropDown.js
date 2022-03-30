import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../store/actions";

export function DropDown() {
  const dispatch = useDispatch();
  let filteredBy = useSelector((state) => state.filterBy);

  const handleChange = (event) => {
    if (!filteredBy.filterBy.find((elem) => elem === event.target.value)) {
      dispatch(addFilter(event.target.value));
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          id='demo-simple-select-label'
          style={{ fontSize: "1.3rem" }}>
          Popular
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={filteredBy}
          label='Age'
          onChange={handleChange}>
          <MenuItem value={"Theme"}>Theme</MenuItem>
          <MenuItem value={"Age"}>Age</MenuItem>
          <MenuItem value={"Brand"}>Brand</MenuItem>
          <MenuItem value={"Characters"}>Characters</MenuItem>
          <MenuItem value={"Stock availability"}>Stock availability</MenuItem>
          <MenuItem value={"Characters"}>Characters</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
