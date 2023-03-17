import * as React from "react";
import Grid from "@mui/material/Grid";

import Login from "../Login";

export default function SignInSide() {
  if (localStorage.getItem("auth_token")) {
    window.location.assign("/feed");
  }
  return (
    // Image left
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random/?pet,pets)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Login />
    </Grid>
  );
}
