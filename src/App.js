import { Box } from "@material-ui/core";
import Navbar from "./components/Navbar"
import "./App.css";
import Feedbar from "./components/Feedbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feedbar/>
        <Rightbar/>
      </Stack>
      
    </Box>
  );
}

export default App;
