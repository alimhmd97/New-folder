import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addToCard,
  addToWishList,
  deleteFromCard,
  deleteFromWishList,
} from "../../store/actions";
import { useState, useEffect } from "react";

const ItemCard = ({ item, ShopingCard = false }) => {
  const [wishIconColor, setwishIconColor] = useState("black");
  const [wishIconBackGroundColor, setwishIconBackGroundColor] =
    useState("white");

  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishList);
  const cardListItems = useSelector((state) => state.cardItems);
  useEffect(() => {
    if (wishListItems.wishList.find((elem) => elem.id === item.id)) {
      setwishIconColor("white");
      setwishIconBackGroundColor("#da2c37");
    } else {
      setwishIconColor("black");
      setwishIconBackGroundColor("white");
    }
  }, [wishListItems]);

  const handelWishList = () => {
    if (wishListItems.wishList.includes(item)) {
      DeleteFromWishList(item);
    } else {
      AddToWishList(item);
    }
  };

  const AddToWishList = () => {
    dispatch(addToWishList(item));
  };
  const DeleteFromWishList = () => {
    dispatch(deleteFromWishList(item));
  };

  const AddToCard = () => {
    dispatch(addToCard(item));
  };

  const DeleteFromCard = () => {
    dispatch(deleteFromCard(item));
  };

  return (
    <Card className={styles.Card}>
      {" "}
      <FavoriteBorderIcon
        onClick={handelWishList}
        style={{
          cursor: "pointer",
          borderRadius: "50%",
          fontSize: "3.5rem",
          position: "absolute",
          right: "15px",
          top: "15px",
          zIndex: "100",
          padding: "10px",
          color: `${wishIconColor}`,
          backgroundColor: `${wishIconBackGroundColor}`,
        }}
      />
      <CardActionArea>
        <CardMedia
          component='img'
          height='300'
          image={item.image}
          alt='green iguana'
          style={{ border: ".5px solid #f3f2f2" }}
        />

        <CardContent>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ fontSize: "1.2rem" }}>
            vendor code : 245515
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            style={{
              height: "65px",
              overflow: "hidden",
              fontWeight: "bold",
              marginTop: "15px",
            }}>
            {item.description}
          </Typography>{" "}
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ fontSize: "1.2rem" }}>
            price :
          </Typography>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{ fontWeight: "bold" }}>
            {item.price} ${" "}
            <Typography
              variant='span'
              color='text.secondary'
              style={{
                textDecoration: "line-through",
                fontWeight: "normal",
                fontSize: "1rem",
              }}>
              {item.price + 100}
            </Typography>
          </Typography>{" "}
        </CardContent>
      </CardActionArea>
      {ShopingCard ? (
        <DeleteIcon
          onClick={DeleteFromCard}
          sx={{
            fontSize: "4rem",
            position: "absolute",
            zIndex: "100",
            bottom: "15px",
            right: "15px",
            color: "white",
            borderRadius: "50%",
            padding: "20px",
            backgroundColor: "#da2c37",
            cursor: "pointer",
          }}
        />
      ) : (
        <ShopOutlinedIcon
          onClick={AddToCard}
          sx={{
            fontSize: "4rem",
            position: "absolute",
            zIndex: "100",
            bottom: "15px",
            right: "15px",
            color: "white",
            borderRadius: "50%",
            padding: "20px",
            backgroundColor: "#da2c37",
            cursor: "pointer",
          }}
        />
      )}
    </Card>
  );
};

export { ItemCard };
