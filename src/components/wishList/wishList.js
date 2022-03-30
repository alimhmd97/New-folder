import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ItemCard } from "../UI/card";

function WishList() {
  const wishList = useSelector((state) => state.wishList);
  useEffect(() => {
    console.log(wishList);
  });

  return (
    <Grid container spacing={7}>
      {wishList?.wishList?.length > 0 ? (
        wishList?.wishList?.map((wishItem) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <p key={wishItem.id}>
                <ItemCard item={wishItem} />
              </p>
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
