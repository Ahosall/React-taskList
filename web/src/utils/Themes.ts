import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const dark = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*::-webkit-scrollbar": {
          width: "0.2em",
        },
        "*::-webkit-scrollbar-track": {
          WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(29, 25, 41, .9)",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#1D1929",
      paper: "#1D1929",
    },
    error: {
      main: red.A400,
    },
  },
});
