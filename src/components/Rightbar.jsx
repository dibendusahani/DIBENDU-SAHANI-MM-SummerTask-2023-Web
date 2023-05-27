import React from "react";
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
const Rightbar = () => {

  const paperStyle={padding:10, height:'400px', width:'auto',margin:"20px auto"}
  const btnstyle = {margin:'8px auto'}

  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar></Avatar>
              <h2>SignIn</h2>
            </Grid>
            <TextField
              placeholder='Enter Username'
              label='Username'
              fullWidth required
            />
            <TextField
              placeholder='Enter password'
              label='Password'
              type='password'
              fullWidth required              
            />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            <Button type='submit' color='primary' variant='contained' style={btnstyle} fullWidth >Sign in</Button>
            <Typography>
              <Link href="#">
                Forget password ?
              </Link>
            </Typography>
            <Typography>
              Do you have an account ?
              <Link href="#">
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
};

export default Rightbar;
