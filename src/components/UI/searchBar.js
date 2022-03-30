import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton, InputAdornment } from "@mui/material";

export function SearchBar() {
  const Data = useSelector((state) => {
    return state?.items?.items?.data;
  });

  return (
    <Stack spacing={2} sx={{ width: "100%", borderRadius: "0" }}>
      <Autocomplete
        freeSolo
        id='free-solo-2-demo'
        disableClearable
        options={Data?.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search among 100+ products'
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment>
                  <IconButton
                    style={{
                      border: "1px solid black",
                      borderRadius: "0",
                      padding: "15px ",
                      // position: "absolute ",
                      marginRight: "-8px",
                      border: "1px solid #cbcbcb",
                    }}>
                    <SearchOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
