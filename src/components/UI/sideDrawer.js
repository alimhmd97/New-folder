import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { RangeSlider } from "./range";
import { ClosedAccordion, OpendAccordion } from "./accordion";
import { CustomizedButtons } from "./button";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Grid } from "@mui/material";

const drawerWidth = 500;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ padding: " 5% 5% 5% 10% " }}>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>price</p>
      <RangeSlider style={{ width: "100%" }} />
      {props?.sideBarDetails?.showedSideBarIitems?.map((itemTitle) => {
        return (
          <OpendAccordion
            key={itemTitle}
            itemTitle={itemTitle}
            sideBarDetails={props.sideBarDetails}
          />
        );
      })}
      {props?.sideBarDetails?.hiddenSideBarIitems?.map((itemTitle) => {
        return (
          <ClosedAccordion
            key={itemTitle}
            itemTitle={itemTitle}
            sideBarDetails={props.sideBarDetails}
          />
        );
      })}{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          margin: "20px 0",
        }}>
        {" "}
        <CustomizedButtons />
        <DeleteOutlineOutlinedIcon
          style={{
            fontSize: "4rem",
            border: "1px gray solid ",
            borderRadius: "50%",
            padding: "10px",
          }}
        />
      </div>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        "@global": {
          "*::-webkit-scrollbar": {
            width: "0.4em",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            outline: "1px solid slategrey",
          },
        },
      }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        {/* <Toolbar> */}
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}>
          <MenuIcon />
        </IconButton>
        {/* <Typography variant='h6' component='div'>
            Responsive drawer
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: `25%`,
              margin: "223px 0 0",
              paddingBottom: "200px",
              overflowY: "scroll",
            },
          }}
          open>
          {" "}
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export { ResponsiveDrawer };
