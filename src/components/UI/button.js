import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { filterBYAge, filterBYTheme } from "../../store/actions";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  padding: "20px 90px ",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#dd2c37",
  borderColor: "#dd2c37",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export function CustomizedButtons() {
  const dispatch = useDispatch();
  let items = useSelector((state) => {
    return state?.items?.items;
  });

  let filterby = useSelector((state) => {
    return state.filterBy.filterBy;
  });

  const filtration = () => {
    if (filterby.includes("Up to a year")) {
      dispatch(filterBYAge(items, 0, 1));
    } else if (filterby.includes("1 Year - 2 Years")) {
      dispatch(filterBYAge(items, 1, 2));
    } else if (filterby.includes("3 Year - 5 Years")) {
      dispatch(filterBYAge(items, 3, 5));
    } else if (filterby.includes("6Year - 10 Years")) {
      dispatch(filterBYAge(items, 6, 10));
    } else if (filterby.includes("Older than 12 Years old")) {
      dispatch(filterBYAge(items, 12, Infinity));
    }

    if (filterby.includes("space(44)")) {
      dispatch(filterBYTheme(items, "Space"));
    } else if (filterby.includes("Ninja(44)")) {
      dispatch(filterBYTheme(items, "Ninja"));
    } else if (filterby.includes("Transport(44)")) {
      dispatch(filterBYTheme(items, "Transport"));
    } else if (filterby.includes("Building(44)")) {
      dispatch(filterBYTheme(items, "Building"));
    } else if (filterby.includes("Homes(44)")) {
      dispatch(filterBYTheme(items, "Homes"));
    }
  };
  return (
    <Stack
      onClick={filtration}
      spacing={2}
      direction='row'
      sx={{ display: "inline-block" }}>
      <BootstrapButton variant='contained' disableRipple>
        Apply Filter
      </BootstrapButton>
    </Stack>
  );
}
