import * as React from 'react';
import {useSession, signIn, signOut} from 'next-auth/react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SellIcon from '@mui/icons-material/Sell';
import Storefront from '@mui/icons-material/Storefront';
import {useRouter} from "next/router";

export default function AccountMenu(props) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    signOut({callbackURL: '/login'});
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
              <Avatar src={props.user.image} sx={{ width: 32, height: 32 }}>{props.user.name}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link href='/profile'>
          <MenuItem onClick={handleClose}>
            <AccountCircle sx={{color: 'grey'}}/> My Account
          </MenuItem>
        </Link>
        <Link href='/cart'>
          <MenuItem onClick={handleClose}>
            <ShoppingCartIcon sx={{color: 'grey'}}/> Shopping Cart
          </MenuItem>
        </Link>
        <Link href='/orders'>
          <MenuItem onClick={handleClose}>
            <ShoppingBag sx={{color: 'grey'}}/> Orders
          </MenuItem>
        </Link>
        <Link href='/listings'>
          <MenuItem onClick={handleClose}>
            <Storefront sx={{color: 'grey'}}/> Listings
          </MenuItem>
        </Link>
        <Divider />
        <p>
          <MenuItem onClick={logOut}>
            <Logout sx={{color: 'grey'}}/> Logout
          </MenuItem>
        </p>
      </Menu>
    </React.Fragment>
  );
}
