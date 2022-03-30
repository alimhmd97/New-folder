import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export function Chip({ text, value }) {
  return (
    <Card
      sx={{
        minWidth: 100,
        maxWidth: 200,
        maxHeight: 60,
        textAlign: "center",
        display: "inline-block",
        backgroundColor: "hsl(0deg 0% 95%)",
        margin: "0 0 10px 0 ",
      }}>
      <CardContent>
        <Typography variant='body2' color='text.secondary' component='span'>
          {text}
        </Typography>
        <Typography gutterBottom component='span'>
          {value}
        </Typography>{" "}
        <Typography variant='body2' color='text.secondary' component='span'>
          $
        </Typography>
      </CardContent>
    </Card>
  );
}
