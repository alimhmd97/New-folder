import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { addFilter, deleteFilter } from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

export function CheckboxList({ title, sideBarDetails }) {
  const [checked, setChecked] = React.useState([0]);
  const dispatch = useDispatch();
  const filterBy = useSelector((state) => {
    return state.filterBy.filterBy;
  });
  let prevFilter;
  const handleToggle = (value) => () => {
    for (let i = 0; i < filterBy.length; i++) {
      for (let j = 0; j < sideBarDetails[title].length; j++) {
        if (sideBarDetails[title][j] === filterBy[i]) {
          prevFilter = sideBarDetails[title][j];
          dispatch(deleteFilter(prevFilter));
        }
      }
    }

    const currentIndex = checked.indexOf(value);
    const newChecked = [checked];

    dispatch(addFilter(value));

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  let listItems = [0, 1, 2, 3];
  if (sideBarDetails[title]) {
    listItems = sideBarDetails[title];
  }
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {listItems.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge='end' aria-label='comments'>
                {/* <CommentIcon /> */}
              </IconButton>
            }
            disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense>
              <ListItemIcon>
                <Checkbox
                  sx={{
                    color: "hsl(359deg 74% 54%)",
                    "&.Mui-checked": {
                      color: "hsl(359deg 74% 54%)",
                    },
                  }}
                  edge='start'
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              {sideBarDetails[title] ? (
                <p>{value}</p>
              ) : (
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              )}{" "}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
