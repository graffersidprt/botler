import { alpha } from "@mui/material/styles";

// SETUP COLORS

export const contrastText = {
   white: "#FFFFFF",
   black: "#000000"
};

export const PRIMARY = {
   lighter: "#ECF0F4",
   light: "#D1EAFA",
   main: "#0D4772",
   dark: "#08385C",
   darker: "#03243B",
   menu_item: "#9EB5C7",
   contrastText: contrastText.white
};
export const SECONDARY = {
   lighter: "#CBF7FF",
   light: "#9BEFFE",
   main: "#37DFFD",
   dark: "#14B1CD",
   darker: "#086576",
   form_background: "#D1E9FA",
   contrastText: contrastText.white
};
export const BLACK_WHITE = {
   lighter: "#FFFFFF",
   light: "#D8D6D6",
   main: "#838383",
   dark: "#525252",
   darker: "#000000",
   contrastText: contrastText.white
};

export const ERROR = {
   lighter: "#FFE7D9",
   light: "#FFA48D",
   main: "#FF4842",
   dark: "#B72136",
   darker: "#7A0C2E",
   contrastText: contrastText.white
};

export const INFO = {
   lighter: "#CBFEFC",
   light: "#63E8F9",
   main: "#00B1ED",
   dark: "#0067AA",
   darker: "#003471",
   contrastText: contrastText.white
};
export const SUCCESS = {
   lighter: "#CDFCD1",
   light: "#69F290",
   main: "#0CD66E",
   dark: "#069A6B",
   darker: "#02665B",
   contrastText: contrastText.black
};
export const WARNING = {
   lighter: "#FFF8D1",
   light: "#FFE475",
   main: "#FFC81A",
   dark: "#B7860D",
   darker: "#7A5204",
   contrastText: contrastText.black
};

export const GREY = {
   0: "#FFFFFF",
   100: "#F9FAFB",
   200: "#F4F6F8",
   300: "#DFE3E8",
   400: "#C4CDD5",
   500: "#919EAB",
   600: "#637381",
   700: "#454F5B",
   800: "#212B36",
   900: "#161C24",
   500_8: alpha("#919EAB", 0.08),
   500_12: alpha("#919EAB", 0.12),
   500_16: alpha("#919EAB", 0.16),
   500_24: alpha("#919EAB", 0.24),
   500_32: alpha("#919EAB", 0.32),
   500_48: alpha("#919EAB", 0.48),
   500_56: alpha("#919EAB", 0.56),
   500_80: alpha("#919EAB", 0.8)
};


export const COMMON = {
   common: { black: "#000", white: "#fff" },
   primary: { ...PRIMARY, contrastText: "#fff" },
   secondary: { ...SECONDARY, contrastText: "#fff" },
   info: { ...INFO, contrastText: "#fff" },
   success: { ...SUCCESS, contrastText: GREY[800] },
   warning: { ...WARNING, contrastText: GREY[800] },
   error: { ...ERROR, contrastText: "#fff" },
   grey: GREY,
   bw: BLACK_WHITE,
   divider: GREY[500_24],
   action: {
      hover: GREY[500_8],
      selected: GREY[500_12],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: GREY[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48
   }
};

const palette = {
   light: {
      ...COMMON,
      mode: "light",
      // text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
      // background: { paper: "#fff", default: "#fff", neutral: GREY[100] },
      // action: { active: GREY[600], ...COMMON.action }
   },
   dark: {
      ...COMMON,
      mode: "dark",
      // text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
      // background: {
      //    paper: GREY[800],
      //    default: BLACK_WHITE.darker,
      //    neutral: GREY[500_12]
      // },
      // action: { active: GREY[500], ...COMMON.action }
   }
};

export default palette;
