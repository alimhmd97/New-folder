import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { ItemCard } from "../UI/card";

function ShopingCard() {
  const cardItems = useSelector((state) => state.cardItems);

  return (
    <Grid container spacing={7}>
      {cardItems?.cardItems?.length > 0 ? (
        cardItems?.cardItems?.map((shopingCardItem) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={shopingCardItem.id}>
              <div>
                <ItemCard item={shopingCardItem} ShopingCard={true} />
              </div>{" "}
            </Grid>
          );
        })
      ) : (
        <h2>No Items In The shoping List</h2>
      )}
    </Grid>
  );
}

export { ShopingCard };
