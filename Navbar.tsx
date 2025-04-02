import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Button sx={styles.button} component={Link} to="/">
          Top Users
        </Button>
        <Button sx={styles.button} component={Link} to="/trending">
          Trending Posts
        </Button>
        <Button sx={styles.button} component={Link} to="/feed">
          Feed
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// Styles using MUI's sx prop
const styles = {
  appBar: {
    backgroundColor: "#1E1E1E", // Dark theme
    padding: "10px 0",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    color: "white",
    fontWeight: "bold",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
};