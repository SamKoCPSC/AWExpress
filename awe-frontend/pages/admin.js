import NavbarLayout from '../layouts/Navbar'
import * as React from 'react';
import { Box, Container } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

export default function Admin() {
    return (
      <Container>
        <Typography sx={{fontSize: '3rem'}}>Admin</Typography>
        <List>
            <ListItem>
                <Typography sx={{fontSize: '2rem'}}>Search Users</Typography>
            </ListItem>
            <Divider></Divider>
            <ListItem>
                <Box sx={{position: 'relative', left: '48px', display: 'flex', gap: '16px'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                        <Typography sx={{fontSize: '1rem'}}>Search:</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                        <TextField></TextField>
                    </Box>
                    
                </Box>
            </ListItem>
            <ListItem>
                <Button variant='contained' sx={{left: '48px'}}>Delete User</Button>
            </ListItem>
        </List>
      </Container>
    )
}

Admin.getLayout = (page) => {
    return ( 
      <NavbarLayout>
        {page}
      </NavbarLayout>
    )
  }