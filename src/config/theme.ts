import { blue, green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import PoppinsBlack from "../assets/fonts/poppins/Poppins-Black.woff2";
import PoppinsBlackItalic from "../assets/fonts/poppins/Poppins-BlackItalic.woff2";
import PoppinsBold from "../assets/fonts/poppins/Poppins-Bold.woff2";
import PoppinsBoldItalic from "../assets/fonts/poppins/Poppins-BoldItalic.woff2";
import PoppinsExtraBold from "../assets/fonts/poppins/Poppins-ExtraBold.woff2";
import PoppinsExtraBoldItalic from "../assets/fonts/poppins/Poppins-ExtraBoldItalic.woff2";
import PoppinsExtraLight from "../assets/fonts/poppins/Poppins-ExtraLight.woff2";
import PoppinsExtraLightItalic from "../assets/fonts/poppins/Poppins-ExtraLightItalic.woff2";
import PoppinsItalic from "../assets/fonts/poppins/Poppins-Italic.woff2";
import PoppinsLight from "../assets/fonts/poppins/Poppins-Light.woff2";
import PoppinsLightItalic from "../assets/fonts/poppins/Poppins-LightItalic.woff2";
import PoppinsMedium from "../assets/fonts/poppins/Poppins-Medium.woff2";
import PoppinsMediumItalic from "../assets/fonts/poppins/Poppins-MediumItalic.woff2";
import PoppinsRegular from "../assets/fonts/poppins/Poppins-Regular.woff2";
import PoppinsSemiBold from "../assets/fonts/poppins/Poppins-SemiBold.woff2";
import PoppinsSemiBoldItalic from "../assets/fonts/poppins/Poppins-SemiBoldItalic.woff2";
import PoppinsThin from "../assets/fonts/poppins/Poppins-Thin.woff2";
import PoppinsThinItalic from "../assets/fonts/poppins/Poppins-ThinItalic.woff2";

import CormorantGaramondBold from "../assets/fonts/cormorant-garamond/CormorantGaramond-Bold.woff2";
import CormorantGaramondBoldItalic from "../assets/fonts/cormorant-garamond/CormorantGaramond-BoldItalic.woff2";
import CormorantGaramondItalic from "../assets/fonts/cormorant-garamond/CormorantGaramond-Italic.woff2";
import CormorantGaramondLight from "../assets/fonts/cormorant-garamond/CormorantGaramond-Light.woff2";
import CormorantGaramondLightItalic from "../assets/fonts/cormorant-garamond/CormorantGaramond-LightItalic.woff2";
import CormorantGaramondMedium from "../assets/fonts/cormorant-garamond/CormorantGaramond-Medium.woff2";
import CormorantGaramondMediumItalic from "../assets/fonts/cormorant-garamond/CormorantGaramond-MediumItalic.woff2";
import CormorantGaramondRegular from "../assets/fonts/cormorant-garamond/CormorantGaramond-Regular.woff2";
import CormorantGaramondSemiBold from "../assets/fonts/cormorant-garamond/CormorantGaramond-SemiBold.woff2";
import CormorantGaramondSemiBoldItalic from "../assets/fonts/cormorant-garamond/CormorantGaramond-SemiBoldItalic.woff2";

/**
 * Creates a new default theme for the application
 *
 * Contains the primary and secondary color palette
 * Contains all the necessary Typography settings as well
 *
 * @returns {Theme} A default theme for the application
 *
 */
export default createTheme({
    palette: {
        primary: {
            main: green[700],
            light: green[800],
            dark: green[600],
            contrastText: "#fff",
        },

        secondary: {
            main: blue[500],
            light: blue[700],
            dark: blue[300],
            contrastText: "#fff",
        },
    },

    typography: {
        fontFamily: ["Poppins", "CormorantGaramond"].join(","),

        allVariants: {
            fontFamily: "Poppins",
        },

        h4: {
            fontFamily: "CormorantGaramond",
        },

        h5: {
            fontFamily: "CormorantGaramond",
        },

        h6: {
            fontFamily: "CormorantGaramond",
        },
    },

    components: {
        MuiCssBaseline: {
            /**
             * The following styles overrides declares the custom fonts used in the application
             */
            styleOverrides: `
                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsBlack}) format('woff2');
                    font-weight: 900;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsBlackItalic}) format('woff2');
                    font-weight: 900;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsExtraBold}) format('woff2');
                    font-weight: 800;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsExtraBoldItalic}) format('woff2');
                    font-weight: 800;
                    font-style: italic;
                }
                
                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsBold}) format('woff2');
                    font-weight: 700;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsBoldItalic}) format('woff2');
                    font-weight: 700;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsSemiBold}) format('woff2');
                    font-weight: 600;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsSemiBoldItalic}) format('woff2');
                    font-weight: 600;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsMedium}) format('woff2');
                    font-weight: 500;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsMediumItalic}) format('woff2');
                    font-weight: 500;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsRegular}) format('woff2');
                    font-weight: 400;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsItalic}) format('woff2');
                    font-weight: 400;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsLight}) format('woff2');
                    font-weight: 300;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsLightItalic}) format('woff2');
                    font-weight: 300;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsExtraLight}) format('woff2');
                    font-weight: 200;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsExtraLightItalic}) format('woff2');
                    font-weight: 200;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsThin}) format('woff2');
                    font-weight: 100;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Poppins';
                    src: url(${PoppinsThinItalic}) format('woff2');
                    font-weight: 100;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'CormorantGaramond';
                    src: url(${CormorantGaramondBold}) format('woff2');
                    font-weight: 700;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'CormorantGaramond';
                    src: url(${CormorantGaramondBoldItalic}) format('woff2');
                    font-weight: 700;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'CormorantGaramond';
                    src: url(${CormorantGaramondSemiBold}) format('woff2');
                    font-weight: 600;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'CormorantGaramond';
                    src: url(${CormorantGaramondSemiBoldItalic}) format('woff2');
                    font-weight: 600;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'CormorantGaramond';
                    src: url(${CormorantGaramondMedium}) format('woff2');
                    font-weight: 500;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'CormorantGaramond';
                    src: url(${CormorantGaramondMediumItalic}) format('woff2');
                    font-weight: 500;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'CormorantGaramond';
                    src: url(${CormorantGaramondRegular}) format('woff2');
                    font-weight: 400;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'CormorantGaramond';
                    src: url(${CormorantGaramondItalic}) format('woff2');
                    font-weight: 400;
                    font-style: italic;
                }

                @font-face {
                    font-family: 'CormorantGaramond';
                    src: url(${CormorantGaramondLight}) format('woff2');
                    font-weight: 300;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'CormorantGaramond';
                    src: url(${CormorantGaramondLightItalic}) format('woff2');
                    font-weight: 300;
                    font-style: italic;
                }
            `,
        },
    },
});
