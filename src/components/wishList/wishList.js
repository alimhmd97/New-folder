import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ItemCard } from "../UI/card";

function WishList() {
  const wishList = useSelector((state) => state.wishList);
  useEffect(() => {});

  return (
    <Grid container spacing={7}>
      {wishList?.wishList?.length > 0 ? (
        wishList?.wishList?.map((wishItem) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={wishItem.id}>
              <div>
                <ItemCard item={wishItem} />
              </div>
            </Grid>
          );
        })
      ) : (
        <h2>No Items In The Wish List</h2>
      )}
    </Grid>
  );
}

export { WishList };
