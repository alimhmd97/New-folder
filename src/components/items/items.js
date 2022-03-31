import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/actions";
import { ItemCard } from "../UI/card";
import { DropDown } from "../UI/dropDown";
import { SearchBar } from "../UI/searchBar";
import { PaginationRounded } from "../UI/Pagination";
import styles from "./items.module.css";
import { ClickableAndDeletableChips } from "../UI/ClickableAndDeletableChips";

const Items = () => {
  const dispatch = useDispatch();
  let filterBy = useSelector((state) => {
    return state.filterBy.filterBy;
  });
  // const tems = useSelector((state) => {
  //   return state;
  // });
  const items = useSelector((state) => {
    return state?.items?.items;
  });

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  return (
    <div style={{ marginLeft: "50px" }}>
      <header
        style={{ fontSize: "3.5rem", fontWeight: "bold", margin: "20px" }}>
        Catalog
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <SearchBar />
          </Grid>{" "}
          <Grid item xs={4}>
            <DropDown
              filterBy={[
                "Brand",
                "Characters",
                "Stock availability",
                "Theme",
                "Age",
              ]}
            />
          </Grid>
        </Grid>
        <div style={{ display: "flex" }}>
          {filterBy.map((elem) => {
            return <ClickableAndDeletableChips filterBy={elem} key={elem} />;
          })}{" "}
        </div>
      </header>{" "}
      <Grid className={styles.items_container} container spacing={5}>
        {items?.length > 0 ? (
          items?.map((item) => {
            return (
              <Grid item lg={4} xs={12} md={6} key={item.id}>
                <ItemCard item={item} className={styles.item} />
              </Grid>
            );
          })
        ) : (
          <h2 style={{ margin: "auto" }}>No I tems To Show</h2>
        )}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px auto",
        }}>
        <PaginationRounded />
      </div>
    </div>
  );
};

export { Items };
