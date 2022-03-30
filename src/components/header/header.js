import { Grid } from "@mui/material";
import EdgesensorLowIcon from "@mui/icons-material/EdgesensorLow";
import GarageIcon from "@mui/icons-material/Garage";
import GridViewIcon from "@mui/icons-material/GridView";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
import { Link } from "react-router-dom";

import "./header.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Header() {
  const wishListItems = useSelector((state) => state.wishList);
  const shopingCardItems = useSelector((state) => state.cardItems);
  const [productsPrics, setproductsPrics] = useState(0);
  useEffect(() => {
    if (shopingCardItems?.cardItems?.length > 0) {
      let price = 0;
      shopingCardItems?.cardItems.forEach((cardItem) => {
        price += cardItem.price;
      });
      setproductsPrics(price);
    }
  }, [shopingCardItems]);

  return (
    <header className={"header"}>
      <Grid container>
        {/* 1 */}
        <Grid item lg={3} xs={12} className={"border flex"}>
          <EdgesensorLowIcon
            style={{
              margin: "auto 15px auto 0",
              display: "inline-block",
              fontSize: "4.5rem",
              borderRadius: "50%",
              backgroundColor: "#f3f2f2",
              padding: "20px",
              color: "#da2c37",
            }}
          />
          <div style={{ textAlign: "center", display: "inline-block" }}>
            <h2 className={"main_text "}>LEGO LAND</h2>
            <p className={"secondary_text"}>RED BRICK</p>
          </div>
        </Grid>
        {/* 2 */}
        <Grid container item lg={6} xs={12}>
          <Grid item lg={3} xs={6} className={"border"}>
            {" "}
            <div className={"flex"} style={{ margin: "23px" }}>
              <p className={"main_text"}>Toys</p>{" "}
              <GarageIcon
                style={{ margin: "auto 0", fontSize: "3rem", color: "#da2c37" }}
              />
            </div>
          </Grid>
          <Grid item lg={3} xs={6} className={"border flex"}>
            <GridViewIcon />
            <p className={"main_text "}>Cataloge</p>
          </Grid>
          <Grid item lg={3} xs={6} className={"border flex"}>
            <p className={"main_text"}>characters</p>
          </Grid>
          <Grid item lg={3} xs={6} className={"border flex"}>
            {" "}
            <p className={"main_text"}>Brand</p>
          </Grid>
        </Grid>
        {/* 3 */}
        <Grid container item lg={3} xs={12}>
          <Grid item lg={5} xs={6} className={"border flex"}>
            <LanguageIcon style={{ marginRight: "10px" }} />
            <p className={"main_text"}>ENG</p>
            <KeyboardArrowDownIcon
              style={{ marginLeft: "5px", fontSize: "2rem" }}
            />
          </Grid>
          <Grid item lg={7} xs={6} className={"border flex"}>
            {" "}
            <PersonOutlineIcon
              style={{
                margin: "auto 15px auto 0",
                display: "inline-block",
                fontSize: "3.5rem",
                borderRadius: "50%",
                backgroundColor: "#f3f2f2",
                padding: "10px",
              }}
            />
            <p className={"main_text"}>Alexander</p>
          </Grid>
        </Grid>
      </Grid>
      {/* layer 2 */}
      <Grid container>
        {" "}
        <Grid item lg={3} xs={6} className={"border flex"}>
          <HomeIcon style={{ fontSize: "2rem", margin: "auto 10px" }} />
          <p className={"main_text"}>Main page</p>{" "}
          <ArrowForwardIosIcon
            style={{
              marginLeft: "5px",
              fontSize: "1.2rem",
              margin: "auto 10px",
            }}
          />{" "}
          <p className={"secondary_text"}>Cataloge</p>
        </Grid>
        <Grid
          xs={6}
          lg={3}
          className={"border flex"}
          style={{ position: "relative" }}>
          <CompareArrowsIcon
            style={{
              display: "inline-block",
              fontSize: "3.5rem",
              borderRadius: "50%",
              backgroundColor: "#da2c37",
              padding: "10px",
              color: "#f3f2f2",
              margin: "20px 20px 20px 0",
            }}
          />
          <p className={"main_text"} style={{ marginRight: "50px" }}>
            Compare Products
          </p>
          <ArrowRightAltIcon
            style={{
              position: "absolute",
              right: "30px",
              color: "#ccc",
              fontSize: "3rem",
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          lg={3}
          className={"border "}
          style={{ position: "relative" }}>
          {" "}
          <Link
            to='/WishList'
            className={" flex"}
            style={{
              textDecoration: "none",
              color: "black",
              position: "relative",
            }}>
            <FavoriteBorderOutlinedIcon
              style={{
                margin: "auto 15px auto 0",
                display: "inline-block",
                fontSize: "3.5rem",
                borderRadius: "50%",
                backgroundColor: "#da2c37",
                padding: "10px",
                color: "#fff",
              }}
            />
            <p style={{ marginRight: "50px" }} className={"main_text "} lin>
              Wish-List-
              {wishListItems.wishList?.length > 0
                ? wishListItems.wishList.length
                : "Empty"}
            </p>{" "}
            <ArrowRightAltIcon
              style={{
                position: "absolute",
                right: "30px",
                color: "#ccc",
                fontSize: "3rem",
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={6} lg={3} className={"border flex"}>
          <Link
            to='/ShopingCard'
            className={" flex"}
            style={{
              textDecoration: "none",
              color: "black",
              position: "relative",
            }}>
            {" "}
            <ShopOutlinedIcon
              style={{
                margin: "auto 15px auto 0",
                display: "inline-block",
                fontSize: "3.5rem",
                borderRadius: "50%",
                backgroundColor: "#da2c37",
                padding: "10px",
                color: "#fff",
              }}
            />
            <p style={{ marginRight: "50px" }} className={"main_text"}>
              {shopingCardItems.cardItems.length} Products-$
              {productsPrics.toFixed(0)}
            </p>{" "}
          </Link>
        </Grid>
      </Grid>
    </header>
  );
}

export { Header };
