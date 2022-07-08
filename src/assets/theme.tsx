import { createTheme } from '@mui/material';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

    components: {
        // Name of the component
        MuiFormControl: {
            styleOverrides: {
                root: {
                    height: 34,
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    height: 34,
                }
            }
        },
        MuiCardMedia: {
            styleOverrides: {
                img: {
                    width: 100,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 20,
                },
            }
        },
    },
});

export default theme;