import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Accessibility, EmojiEmotions, Home, People, School, Wifi } from '@material-ui/icons'
import { Desk } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <Box  flex={1} p={2} sx={{ display: {xs: "none" , sm:"block"}}} >
      <Box position="fixed">
      <List >
          <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home/>
          </ListItemIcon>
          <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <School/>
          </ListItemIcon>
          <ListItemText primary="Campus" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Wifi/>
          </ListItemIcon>
          <ListItemText primary="Connect" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Desk/>
          </ListItemIcon>
          <ListItemText primary="Director's Desk" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Accessibility/>
          </ListItemIcon>
          <ListItemText primary="Carrer" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <People/>
          </ListItemIcon>
          <ListItemText primary="Alumni" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <EmojiEmotions/>
          </ListItemIcon>
          <ListItemText primary="Expressions" />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar