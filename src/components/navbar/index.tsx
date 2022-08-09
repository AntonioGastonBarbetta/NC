import { AppBar, Button, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Other page</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
