import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { deleteFilter } from "../../store/actions";

export function ClickableAndDeletableChips({ filterBy }) {
  const dispatch = useDispatch();

  const handleClick = () => {};

  const handleDelete = () => {
    dispatch(deleteFilter(filterBy));
  };

  return (
    <Stack direction='row' spacing={1}>
      <Chip
        sx={{ borderRadius: "5px" }}
        label={filterBy}
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Stack>
  );
}
