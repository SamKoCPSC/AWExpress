import {createTheme} from "@mui/material/styles";


/*
To Use:
- Add another field/object if needed in the global theme. (eg, breakpoints, typography, sizes, etc)
- If making styled components outside a function, can access this by calling theme.palette.primary.main as an example
- If needed inside the function, must call "const theme = useTheme();" first before you can access.
 */
export const theme = createTheme({
    palette: {
        primary: {
            main: '#ed8929',
            light: '#fcbd71'
        },
        secondary: {
            main: '#242f3d',
            dark: '#131921',
            contrastText: 'white',
        },
        background: {
          main: '#e3e6e6'
        }
    },
})