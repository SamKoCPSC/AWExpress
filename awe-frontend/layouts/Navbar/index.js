import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import AccountMenu from './AccountMenu';
import Drawer from './Drawer';

import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import {getSession, useSession, signOut} from "next-auth/react";
import {getServerSession} from 'next-auth/next';
import authOptions from "../../pages/api/auth/[...nextauth]";
import Link from 'next/link';

const TOOLBAR_HEIGHT = 50

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  marginTop: TOOLBAR_HEIGHT + 50,
  paddingBottom: 5,
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  '@media all': {minHeight: TOOLBAR_HEIGHT},
  backgroundColor: theme.palette.secondary.main,
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.60),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.90),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavbarLayout({children}) {
  const theme = useTheme();
  const router = useRouter();
  const {data: session, status} = useSession();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setDrawer] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  if (typeof window === "undefined") return null

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace("/login")
    }
  }, [status])

  if (session) {
    // if (status === "loading") {
    //   return <p>loading</p>
    // }
    // if (status === "unauthenticated") {
    //   router.replace("/login")
    // }


//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

    const handleDrawer = () => {
      setDrawer(!isDrawerOpen)
    }

  return (
    <Box sx={{ flexGrow: 1, top: '0', left: '0', width: '100%' }}>
      <AppBar position="fixed">
        <ToolbarStyle>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawer}
            sx={{ mr: 2, color: theme.palette.secondary.contrastText}}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/home'>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block', color: theme.palette.primary.main } }}
            >
              AWExpress
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
              href='/sell' 
              size="large" 
              aria-label="show 4 new mails"
              sx={{color: theme.palette.secondary.contrastText}}
            >
              <Badge badgeContent={0} color="error">
                <SellIcon />
              </Badge>
            </IconButton>
    return (
      <Box sx={{ flexGrow: 1, top: '0', left: '0', width: '100%' }}>
        <AppBar position="fixed">
          <ToolbarStyle>
            <IconButton
              href='/cart'
              size="large"
              edge="start"
              aria-label="open drawer"
              onClick={handleDrawer}
              sx={{ mr: 2, color: theme.palette.secondary.contrastText }}
            >
              <Badge badgeContent={3} color="error">
                <ShoppingCartIcon />
              </Badge>
              <MenuIcon />
            </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ xs: 'none', sm: 'block', color: theme.palette.primary.main, '&:hover': {cursor: 'pointer'} }}
                onClick={() => router.push("/home")}
              >
                AWExpress
              </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
              />
            </Search>
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                sx={{color: theme.palette.secondary.contrastText}}
                onClick={() => router.push("/sell")}
              >
                <Badge badgeContent={0} color="error">
                  <SellIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{color: theme.palette.secondary.contrastText}}
                onClick={() => router.push("/cart")}
              >
                <Badge badgeContent={3} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                //aria-controls={menuId}
                aria-haspopup="true"
                //onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {session && <AccountMenu user={session.user}/>}

              </IconButton>
            </Box>
            <Box sx={{display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                size="large"
                aria-label="show more"
                //aria-controls={mobileMenuId}
                aria-haspopup="true"
                //onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </ToolbarStyle>
        </AppBar>
        <Drawer open={isDrawerOpen}></Drawer>
        <MainStyle>
          {children}
        </MainStyle>
      </Box>
    );
  } else {
    return <></>
  }
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getServerSession(
        context.req,
        context.res,
        authOptions
      )
    }
  }
}
